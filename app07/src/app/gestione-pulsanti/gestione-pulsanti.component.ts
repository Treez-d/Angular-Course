import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestione-pulsanti',
  templateUrl: './gestione-pulsanti.component.html',
  styleUrls: ['./gestione-pulsanti.component.css']
})
export class GestionePulsantiComponent implements OnInit {

  testiPulsanti: string[];

  constructor() {
    this.testiPulsanti = ["invia", "salva", "elimina", "annulla", "conferma", "esci", "txt"];
   }

  ngOnInit(): void {
  }

  catturaEvento(testo:string):void{
    alert('hai cliccato mio figlio '+ testo);
  }

}
