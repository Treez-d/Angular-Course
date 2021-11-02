import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
utente:Utente;

  constructor(private router:Router) { 
    this.utente ={
      username:"ospite",
      password:"123",
      autenticato: false
    };
  }


  autentica(user:string, pass:string):void{

    if (user=='pippo' && pass=='pluto'){

      this.utente= {
        username: user,
        password:pass,
        autenticato: true
      };
      alert('riconosciuto')
      this.router.navigateByUrl('pazienti')
    }
    else {
    alert('non riconosciuto')
    this.router.navigateByUrl('errore')
    }
  }

  logout():void{
    this.utente ={
      username:"ospite",
      password:"123",
      autenticato: false
    };
    alert('disconnesso')
    this.router.navigateByUrl('homepage')
  }

}
