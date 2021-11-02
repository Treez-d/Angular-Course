import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private us: UtenteService) { }

  ngOnInit(): void {
  }

  login(username:any, password:any):void{
    this.us.autentica(username,password);
  }


}
