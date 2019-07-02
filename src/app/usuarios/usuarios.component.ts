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

  editUser111(userData){
    this._usuarios.editUser(userData).subscribe(user => {
      console.log("usuario actualizado");

      console.log(user);
    })
  }

  deleteUser(id){
    this.users = this.users.filter(user => {
      if(user.id != id) return user
    })

    this._usuarios.deletetUser(id).subscribe(user => {
      console.log("usuario borrado");

      console.log(user);
    })
  }

  ngOnInit() {
  }

}
