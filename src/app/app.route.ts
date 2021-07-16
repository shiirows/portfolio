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
{path: 'accueil', component:AccueilComponent,data: {animation: 'accueilPage'} },
{path: 'formations', component:FormationsComponent,data: {animation: 'formPage'} },
{path: 'loisir', component:LoisirComponent,data: {animation: 'loisirPage'} },
{path: 'contact', component:ContactComponent,data: {animation: 'contactPage'} },
{path: 'bma', component:BmaComponent,data: {animation: 'bmaPage'} },
{path: 'wild', component:WildComponent,data: {animation: 'wildPage'} },
{path: 'jeux', component:JeuxComponent,data: {animation: 'jeux'} },
{path: 'projetg', component:ProjetgComponent,data: {animation: 'projetg'} },
{path: 'quisuisje', component:QuisuisjeComponent,data: {animation: 'projetg'} },
{path: '', component:AccueilComponent },
{path: '**', component:ConstructionComponent,data: {animation: 'consPage'} },

];

