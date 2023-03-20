import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
usuario: string=''
senha: string=''
erro: string=''
constructor(private router: Router) { }

login(){

  if (this.usuario == "admin" && this.senha== "123"){
   this.router.navigate(['home']);
  }

  else{
    this.erro='Usuário ou senha inválido'

  }



}



}
