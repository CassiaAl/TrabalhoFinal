import { Component, OnInit } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  result:string;

  constructor(private http:HTTP) {}

  consultarUsuario(usu : string){
    let url:string = "http://localhost:8080/api.rest/usuario" + usu + "/json";
    console.log( "Chamando" + url)
    this.http.get(url, { }, { })
      .then(data => {
        this.result = data.data;
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
        });
  }

}
