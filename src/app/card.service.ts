import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Projet, Default_type } from './list';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor( private http:HttpClient) { }

  public getALL():Observable<Projet[]>{
    return this.http.get<Projet[]>(environment.cardsApiUrl);
  }
  public getTypes():Observable<any[]>{
    return this.http.get<any[]>(environment.cardTypesApiUrl);
}

public getDefaultType():Observable<string>{
  return this.getTypes().pipe( 
    map(
      (types:any[]) => {
        const results:any[] = types.filter( (cur) => cur.default );
        if( results.length > 0 ){
          return results.shift().type;
        }
        else{
          return Default_type;
        }
      }
    )
  )
}
}
