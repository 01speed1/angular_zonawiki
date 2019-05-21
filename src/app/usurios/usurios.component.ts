import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';



@Component({
  selector: 'app-usurios',
  templateUrl: './usurios.component.html',
  styleUrls: ['./usurios.component.css']
})
export class UsuriosComponent implements OnInit {

  users = []

  constructor(private _usuarios: UsuariosService) { 
    _usuarios.getUSers().subscribe(users => {this.users = users} )
  }

  ngOnInit() {
  }

}
