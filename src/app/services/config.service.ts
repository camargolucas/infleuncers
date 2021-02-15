import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
/*   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  }; */
  constructor(private http:HttpClient) { }


  

  get isMobile() {
    return window.innerWidth <= 775;
  }

  headers
  requestOptions

  getHeaderConfig(token) {
    this.headers = new Headers();
    this.headers = {

        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",       

    };
    this.requestOptions = ({ headers: this.headers });
    return this.requestOptions;

}

  registerUser(user){

    
    const userObj = {
      "nome": user['nome'],
      "email": user['email'],
      "celular": user['telefone'],
      "mensagem": user['mensagem'],
      "influencer": user['tipo'] == 'influencer'? true:false
    }

    console.log(user['tipo'])

    let obj = JSON.stringify(userObj)
    

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',     
    })

    const url = "http://api.id.tec.br/ContatoSite/cadastrar"
    
     
     
     return this.http.post(url, (JSON.parse(obj)) )
  }
}
