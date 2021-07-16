import { Pipe, PipeTransform } from '@angular/core';
import { Projet } from './list';

@Pipe({
  name: 'cardtype'
})
export class CardtypePipe implements PipeTransform {

  transform(cards: Projet[], type:string = ""): Projet[] {

    if( type === "")
    return cards;

    const results:Projet[] = cards.filter(
      (value:Projet) => {
        return value.type.includes(type);
      }
    );

    return results
  }

}