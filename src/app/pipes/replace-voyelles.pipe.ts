import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceVoyelles'
})
export class ReplaceVoyellesPipe implements PipeTransform {

  transform(ch: string): string {
   let result="";
    const v=['a','A','e','E','i','I','o','O','u','U','y','Y',];
    for (let i = 0; i < ch.length; i++) {
      let alt=ch[i];
      for (let j = 0; j < v.length; j++) {
          if (ch[i]==v[j]) {
            alt="*"; 
          }      
      }
      result=result+alt;
      
    }
    return result;
  }

}
