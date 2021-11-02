import { Component, OnInit } from '@angular/core';
import { Orologio } from './orologio';

@Component({
  selector: 'app-gestione-orologi',
  templateUrl: './gestione-orologi.component.html',
  styleUrls: ['./gestione-orologi.component.css']
})
export class GestioneOrologiComponent implements OnInit {

  elencoOrologi: Orologio[];

  constructor() {
    this.elencoOrologi = [
      new Orologio(5,22),
      new Orologio(21,27),
      new Orologio(23,50)
    ]
   }

  ngOnInit(): void {
  }

aumenta(orologio: Orologio):void{
  //aumenta i minuti di 5
  orologio.minuti += 5;
  if(orologio.minuti > 59){
    orologio.ore ++;
    if(orologio.ore > 23){
      orologio.ore=0;
    }
    orologio.minuti=0;
  }
}

}
