import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-elements',
  templateUrl: './list-of-elements.component.html',
  styleUrls: ['./list-of-elements.component.css']
})
export class ListOfElementsComponent implements OnInit {

  ZonaWikiList:string[] = ["Jairo", "Javi", "Nath", "Diego", "Andres", "Alejo", "Dany", "Lau", "Cris", "Adri", "Migue", "Will"]

  constructor() { }

  ngOnInit() {
  }

}
