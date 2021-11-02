/*mediante il singleton rendiamo disponibile una unica instanza di questa classe*/

import { Injectable } from "@angular/core";
import { nomi } from "../data/nomi";

@Injectable(
    //visibilità completa in tutta l'app!!
    {providedIn:'root'}
)

export class NomeService{
    //voglioo lo stesso array per tuttiquelli che usano il service
    getNomi():string[]{
        //restituisco L'UNICA ISTANZA dell'array di nomi
        return nomi;
    }

    addNome(nome: string):void{
        //add name to list
        nomi.push(nome);
    }

}