import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boxerFilter'
})
export class BoxerFilterPipe implements PipeTransform {

  transform(arr: {name: string;}[] , searchBoxer: string ) {
   
    if(arr.length === 0 || searchBoxer ==="")
    return arr;

   return arr.filter(el=>el.name.toLowerCase().indexOf(searchBoxer.toLowerCase())!==-1)

  }

}
