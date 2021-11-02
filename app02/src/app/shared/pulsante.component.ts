//import { Component } from "@angular/core";
//questo ci deve essere PER FORZA
import { Component } from "@angular/core";

//oggetto con metadati che da le funzionalità al comp
//per poterlo usare come direttiva in un altro comp
 @Component({
    //selector, il nome del tag non si possono usare tag html esistent
    selector:'pressme',
    //template, its html code, inline: inside of a string
    template:'<button>{{label}}</button>'
 })

//un oggetto che contiene attributi serve ildecorator per farlo diventare un comp
//export per poterla importare altrove
export class PulsanteComponent{
//attributi classe
label:string = '💜';
}