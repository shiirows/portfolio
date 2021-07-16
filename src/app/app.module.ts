import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { route } from './app.route';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule,} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormationsComponent } from './formations/formations.component';
import { LoisirComponent } from './loisir/loisir.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BmaComponent } from './bma/bma.component';
import { ConstructionComponent } from './construction/construction.component';
import { WildComponent } from './wild/wild.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ProjetgComponent } from './projetg/projetg.component';
import { HttpClientModule } from '@angular/common/http';
import { CardtypePipe } from './cardtype.pipe';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';





@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormationsComponent,
    
    LoisirComponent,
    ContactComponent,
    
    NavbarComponent,
    BmaComponent,
    ConstructionComponent,
    WildComponent,
    JeuxComponent,
    ProjetgComponent,
    CardtypePipe,
    QuisuisjeComponent
    
    
    
  ],
  imports: [
    
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }