import { Component, OnInit } from '@angular/core';
import { NomeService } from './nome.service';

@Component({
  selector: 'app-gestione-nomi',
  templateUrl: './gestione-nomi.component.html',
  styleUrls: ['./gestione-nomi.component.css']
})
export class GestioneNomiComponent implements OnInit {

  nomi:string[];

  //iniettiamo il serv nel constr
  //constr serve per inizializzare gli attributi della classe e viene eseguito una sola volta di norma
  //ma il constr di un componente deve fare ben più cose
  constructor(private ns:NomeService) {
    this.nomi = [];
   }
//metodo dell'interfaccia on init
//it's one of the life cicle hooks
  ngOnInit(): void {
    this.nomi = this.ns.getNomi();
  }
//il component gestisce il click ma il lavoro sporco viene fatto dal servizio
  insert(nome: any):void{
//chiede al servizio di aggiungere il nome
this.ns.addNome(nome.value);
//pulire la casella del nome
nome.value = '';
  }

}
