import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

public link = document.getElementsByClassName('menu-item')

public rangerNav: boolean = false
public cacher(){
this.rangerNav=!this.rangerNav
}

  ngOnInit(): void {
    
  }

}
