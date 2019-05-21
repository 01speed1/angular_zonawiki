import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //password:string = "superSecretPassword:v"

  fields = {
    grito:false,
    soltaron: "",
    pulsaron: "",
    enter: "",
    usuario: "",
    password: this.password
  }

  grita(){
    this.fields.grito = !this.fields.grito
    alert("AAAAAAAAAAHHHHHHHHH!!!!!!!!!!!!1")
  }

  suelta(e){
    this.fields.soltaron = e.target.value
    console.log(e.target.value)
  }

  pulsa(e){
    this.fields.enter = e.target.value
    alert("me pulsaron !!! aiuda!!")
    console.log(e.target.value)
  }

  gritaNombreUsuario(nombreUsuario) {
    this.fields.usuario = nombreUsuario.value
    alert(`${nombreUsuario.value.toUpperCase()}!!!!`)
  }

  update_value(){

  }

}
