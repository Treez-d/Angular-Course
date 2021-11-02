import { Injectable } from '@angular/core';
import { atleti } from '../data/atleti';
import { Atleta } from '../models/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor() { }

  getAtleti(): Atleta[]{
    return atleti;
  }

  addAtleta(atleta:Atleta): void{
    atleti.push(atleta);
  }

  getAtletaById(id:number):any{
    let atleta = undefined; // nel caso c'è oppure no

    atleta = atleti.find(a => a.id == id);

    return atleta;
  }

  updateAtleta(atletaModificato:Atleta):void{
    //cerco la posizione dell'atleta modificato nell'array
    let position = atleti.findIndex(a => a.id == atletaModificato.id);
    //non puo' esistere un index minore di zero
    if(position>0)
    atleti[position]=atletaModificato;
  }

  deleteAthleteById(id:number):void{
    //cerco la posizione dell'id nell'array atleti
    let position = atleti.findIndex(a => a.id == id);
    if(position>=0)atleti.splice(position,1);
  }

}
