import {Routes} from '@angular/router'
import { AccueilComponent } from './accueil/accueil.component';
import { FormationsComponent } from './formations/formations.component';
import { LoisirComponent } from './loisir/loisir.component';
import { ContactComponent } from './contact/contact.component';
import { BmaComponent } from './bma/bma.component';
import { ConstructionComponent } from './construction/construction.component';
import { WildComponent } from './wild/wild.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ProjetgComponent } from './projetg/projetg.component';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';


export const route :Routes = [
{path: 'accueil', component:AccueilComponent,data: {animation:'accueilPAge'} },
{path: 'formations', component:FormationsComponent,data: {animation: 'formationsPage'} },
{path: 'loisir', component:LoisirComponent,data: {animation: 'loisirPage'} },
{path: 'contact', component:ContactComponent,data: {animation: 'contactPage'} },
{path: 'bma', component:BmaComponent,data: {animation: 'bmaPage'} },
{path: 'wild', component:WildComponent,data: {animation: 'wildPage'} },
{path: 'jeux', component:JeuxComponent,data: {animation: 'jeuxPage'} },
{path: 'projetg', component:ProjetgComponent,data: {animation: 'projetgPage'} },
{path: 'quisuisje', component:QuisuisjeComponent,data: {animation: 'quisuisjePage'} },
{path: '', component:AccueilComponent },
{path: '**', component:ConstructionComponent,},

];

