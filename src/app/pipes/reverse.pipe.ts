import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch: string): string {
    let newCh:string="";
    // ********** 1er méthode ***************
    // for (let i = 0; i < ch.length; i++) {
    //   newCh= ch[i]+newCh;
      
    // }
    // ********** 2 méthode ***************
    for (let i = ch.length-1; i >=0; i--) {
      newCh= newCh+ch[i];
      
    }
    return newCh;
  }

}
