import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
 
  @ViewChild('form') form!: NgForm
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  stateBtn = false
  
  dataForm={}
  
  randEmail(){
   /* this.form.setValue({
      email: 'k.maykl@yandex.ru',
      pass: '',
      countru: '',
      answer: ''
    })*/
   
    this.form.form.patchValue ({
      email: 'k.maykl@yandex.ru',
    })
  }

  submitForm(){
  this.stateBtn=true;
  this.dataForm= this.form.value;
  this.form.reset();
  }
  



  }


