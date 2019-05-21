import { Injectable } from '@angular/core';

//importar
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  users_url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) {


    console.log("service working")
  }

  getUSers(){
    return this.http.get(this.users_url)
  }
}
