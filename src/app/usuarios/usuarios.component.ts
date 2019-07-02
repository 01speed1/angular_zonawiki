import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  users:any = []

  constructor(private _usuarios: UsuariosService) {
    _usuarios.getUSers().subscribe(users => {
      this.users = users
    } )
  }

  ngOnInit() {
  }

}
