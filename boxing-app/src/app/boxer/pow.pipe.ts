import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'appPow',
})

export class PowPipe implements PipeTransform{
private copyValue!: number;

    transform(value: any, args: number) {

       this.copyValue= value;
       
        for (let index = 1; index < args; index++) {
           value= value* this.copyValue;  
        }
        return value;
    }
   /* transform(value: any) {
       return value+ ' pipe';
    }*/

}