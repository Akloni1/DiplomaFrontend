import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IBoxer } from '../boxer.interface';
import { IUser } from '../user.interface';
import { BoxerService } from '../boxer.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

@Component({
  selector: 'app-boxer',
  templateUrl: './boxers-list.component.html',
  styleUrls: ['./boxers-list.component.scss'],
})
export class BoxersListComponents implements OnInit {
  public boxers: IBoxer[] = [];
  token: string | null = null;
   user: IUser={
     boxingClubId:0,
     coachId: 0,
     role:""
     
   };

  constructor(private BoxerService: BoxerService, private router: Router, private jwtHelper: JwtHelperService) {}

  ngOnInit() {
    this.token = localStorage.getItem('auth_token');
    if(this.token!==null){
      if (this.jwtHelper.isTokenExpired(this.token)) {
        // token expired 
        console.log("токен истек")
        this.router.navigate(['/login']);
      } else {
    this.BoxerService.getBoxers().subscribe((response) => {
      this.boxers = response;
    });

    this.BoxerService.getUserByToken().subscribe((response) => {
      this.user = response;
     // console.log(response);
    });
  }
}
else{
  console.log("токена нет")
  this.router.navigate(['/login']);
}
  }

  deleteBoxer(id: number) {
    this.BoxerService.deleteBoxer(id)
      .pipe(
        switchMap(() => {
          return this.BoxerService.getBoxers();
        })
      )
      .subscribe((data) => {
        this.boxers = data;
      });
  }
}
