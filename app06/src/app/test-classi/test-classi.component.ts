import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-test-classi',
  templateUrl: './test-classi.component.html',
  styleUrls: ['./test-classi.component.css']
})
export class TestClassiComponent implements OnInit {
//devo per forza inizializzarlo nel constructor
persona:Persona;
elencoPersone: Persona[];
listaPersone: Persona[];

//QUI
  constructor() { 
    this.persona = new Persona('Choi', 'Beomgyu',21);
    //per ogni index abbiamo un indirizzo voi diverso
    this.elencoPersone = [
      new Persona('Choi', 'Soobin',21),
      new Persona('Choi', 'Yeonjun',21),
      new Persona('Choi', 'Beomgyu',21),
      new Persona('Kang', 'Taehyun',21),
      new Persona('Huening', 'Kai',21)
    ];
    this.listaPersone = [
      {
      nome: 'soobin',
      cognome: 'choi',
      anni: 23
      },
      {
      nome: 'kai',
      cognome: 'huening',
      anni: 20
      }
    ]
  }



  /*OnInit=on initialitzing*/
  ngOnInit(): void {
    /* //alert('YAH')

    // new instance - new: crea un oggetto invocando il suo costruttore (anche predefinito)
    //creiamo la variabile di istanza
    const s1 = new Scatola('chips');
    const s2 = new Scatola('soju',3);

    console.log("contenuto di s1: " + s1.contenuto +'\npeso di s1: ' + s1.peso);
    console.log("contenuto di s2: " + s2.contenuto +'\npeso di s2: ' + s2.peso);

    //worst! should use ENCAPSULATION: tiene in stato privato i dati di un oggetto
    //per non accedere ne in lettura ne in scrittura
   // s1.peso= -30;
    s1.peso= -30;
    console.info("contenuto di s1: " + s1.contenuto +'\npeso di s1: ' + s1.peso);

    s1.stampaDati();
 */
  }

}

// new class

class Scatola{
  //?attributi
  //_ usato per non intralciare i getter e setter senza parentesi () <- ts feature
  private _contenuto:string;
  private _peso:number;

  //?costruttore
  //CONTENUTI OPZIONALI SEMPRE AL FONDO!!!!!
  //il costruttore è pubblico per questo possiamo creare scatole liberamente
  constructor(c:string, p?:number){
    //console.log("creata una nuova instanza di scatola");
    this._contenuto = c;
    //di default pesa zero se no p
    this._peso =p||0;
  }

  //?metodi- tipizziamo il metodo
  //GETTER - scomodo
  /* getContenuto(): string{
    return this.contenuto;
  }
  getPeso():number{
    return this.peso;
  } */
  get contenuto():string{
    return this._contenuto;
  }

  get peso():number{
    return this._peso;
  }

  
  //SETTER
  /* setPeso (p: number):void{
    this._peso=p;
  } */
  set contenuto(c: string){
    this._contenuto=c;
  }
  set peso(p: number){
    if(p>=0){
      this._peso=p;
    }else console.error('ERRORE! NON PUOI DARE UN PESO NEGATIVO!!!');
  }
  stampaDati() :void{
    console.info('contenuto scatola: '+ this._contenuto +'peso scatola: '+ this._peso);
    
  }
  /* 
  si può fare anche ivocando i getter e setter interni
  stampaDati() :void{
    console.log('contenuto scatola: '+ this.contenuto +'peso scatola: '+ this+'contenuto scatola: '+ this.peso);
    
  } */
}
