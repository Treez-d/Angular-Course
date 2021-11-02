import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-modifica-atleta',
  templateUrl: './modifica-atleta.component.html',
  styleUrls: ['./modifica-atleta.component.css']
})
export class ModificaAtletaComponent implements OnInit {

  atleta:Atleta;

  constructor(private as:AtletaService, private router:Router, private route:ActivatedRoute) {
    this.atleta = {
    id:0, 
    nome:'',
    punteggio:0
    }

   }

  ngOnInit(): void {
    //controlla se è effettivamente l'atleta che vogliamo modificare
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    let atletaRestituito = this.as.getAtletaById(id);
    //in tal caso lo sostituiamo ma prima verifichiamo che esista
    if(atletaRestituito)
    this.atleta = atletaRestituito;
    else{
      alert("l'atleta non esiste");
      this.router.navigateByUrl("/atleti")
    }

  }

  conferma(n:any, p:any):void{
    //ricostruisco l'atleta con i parametri del form
    let atletaModificato = {
      id: this.atleta.id, //è una modifica quindi stesso id
      nome: n.value,
      punteggio: p.value
    };
    //chiediamo al servizio di sovrascrivere l'atleta
    this.as.updateAtleta(atletaModificato),
    //redirect a pagina dettagli
    this.router.navigateByUrl('/atleti/'+this.atleta.id);
  }

  delete():void{
    //chiedo al servizio di eliminare l'atleta
    this.as.deleteAthleteById(this.atleta.id);
    //vado all'elenco
    this.router.navigateByUrl('/atleti');
  }

}
