import { Component } from "@angular/core";

@Component({
    selector:'prodotto',
    templateUrl:'./prodotto.component.html',
    styleUrls:['./prodotto.component.css']
})

export class ProdottoComponent{
    codice:string="C043";
    nome:string="Egg Tart";
    immagine:string="assets/img/eggtart.jpg";
    prezzo:number= 4.99;
    description:string="Among Huening Kai's favs";

}