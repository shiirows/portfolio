import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projet, PROJET_LIST } from './list';
import {  fader} from './route-animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fader
    
  
  ]
})
export class AppComponent {
  title = 'porte-folio';



prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }


  
constructor() {

}
ngOnInit() {}
  
}

