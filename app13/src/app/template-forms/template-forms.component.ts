import { Component, OnInit, Output } from '@angular/core';
import { DatiUtente } from '../models/dati-utente';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  datiModel: DatiUtente;
  dati: DatiUtente;

  constructor() { 
    //dati niziali form 
    this.datiModel= {
    'nome': "oi",
    'cognome':"moira",
    'intMusic': false,
    'intDrawing': false,
    'intSport': false,
    'hungry': false,
    'esperienza': "",
    'commenti':''
  };
  //dati coon modifica utente
  //this.dati = Object.assign( {},this.dati)
  //same thing spread operator ecmascript serve per riempire array o creare cloni 
  this.dati = { ...this.datiModel }
}

  ngOnInit(): void {
   
  }

}
