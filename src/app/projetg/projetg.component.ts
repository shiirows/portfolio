import { Component, Input, OnInit, Output } from '@angular/core';
import { CardService } from '../card.service';
import { Default_type, Projet, PROJET_LIST } from '../list';


@Component({
  selector: 'app-projetg',
  templateUrl: './projetg.component.html',
  styleUrls: ['./projetg.component.css']
})
export class ProjetgComponent implements OnInit {

  @Input()
 public data:Projet|null = null;

  public list:Projet[] = [];
  public types:any[] = [];
  public currentType:string = Default_type;
  public currentName:string = "";
  public currentDesc:string = "";
 
  
    constructor(private cardService:CardService) {
    
     
     }
  
    public  ngOnInit():void{
      this.cardService.getALL().subscribe(
        ( cards:Projet[]) => {
          this.list = cards;
        }
        
      );
      
    
  
        this.cardService.getTypes().subscribe( 
          (types:any[]) => {
            this.types = types;
          }
        );
        
        this.cardService.getDefaultType().subscribe( 
          (type:string) => {
            this.currentType = type;
          }
        );
      }
      }
      
  