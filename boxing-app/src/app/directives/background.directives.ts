import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
selector: '[appBackground]'
})


export class BackgroundDirectives implements OnInit {

    @Input() hoverColor: string= 'green';
    @Input() defColor: string= 'red';

    @HostBinding('style.backgroundColor') background!: string;

    constructor(private el: ElementRef, private renderer : Renderer2) {

    }
    ngOnInit() {
        
       // this.el.nativeElement.style.backgroundColor = 'blue' ;
    }

    @HostListener('mouseenter') mouseEnter(){
      //  this.renderer.addClass(this.el.nativeElement, "white-text")
      //  this.renderer.setStyle(this.el.nativeElement,'background-color','green')
      this.background= this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave(){
        //this.renderer.removeClass(this.el.nativeElement, "white-text")
       // this.renderer.setStyle(this.el.nativeElement,'background-color','transparent')
       this.background= this.defColor
    }

}