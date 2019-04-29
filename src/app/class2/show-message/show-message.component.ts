import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  show:boolean = true
  show2:boolean = true

  constructor() { }

  hideTheMessage(){
    this.show2= !this.show2
  }

}
