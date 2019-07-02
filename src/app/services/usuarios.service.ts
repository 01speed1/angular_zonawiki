import { Injectable } from '@angular/core';

//importar
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  users_url = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) {}

  getUSers(){
    return this.http.get(this.users_url)
  }

  getUser(user_id){
    return this.http.get(`${this.users_url}/${user_id}`)
  }

  addUser(user_data){
    return this.http.post(this.users_url, user_data)
  }

  editUser(user_data){
    return this.http.post(this.users_url, user_data)
  }

  deletetUser(user_id){
    return this.http.delete(`${this.users_url}/${user_id}`)
  }
}
