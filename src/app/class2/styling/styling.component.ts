import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.css']
})
export class StylingComponent implements OnInit {

  cssStyle:{color:string} = {
    color: "white"
  }

  constructor() { }

  ngOnInit() {
  }

  red = () => { this.cssStyle.color = "red" }
  blue = () => { this.cssStyle.color = "blue" }
  green = () => { this.cssStyle.color = "green" }

}
