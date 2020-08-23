import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delimetr'
})
export class DelimetrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length === 0) return;

    switch(value.length){
       case 1:
         return value[0];
       default:{
         let last = value[value.length - 1];  
         return `${value.slice(0 , -1).join(args)},${last}`
       }
    }
      
 }

}
