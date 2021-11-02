import { Component } from "@angular/core";

@Component({
    selector:'main-comp',
    //con il backtick possiamo usare una stringa MULTILINEA
    template:
    `
    <main>
        <h2>{{titoloMain}}</h2>
        <p>{{testoMain}}</p>
    </main>
    `,
    //vuole un array di stili css
    styles:[
        `
        main{
            background-color: pink;
            border:2px solid purple;
            padding:0 2%;
        }
        h2{
            font-weight:800;
        }
        p{
            white-space: pre-wrap;
        }

        `
    ]
})

export class MainComponent{
titoloMain: string = "I JUST WANNA BE HAPPIER";
//&lt; in htm indica minore
//per farlo anndare a capo usiamo il white space in css che spiega come gestre
//gli spazzi e andare a capo prewrap(pre crea br wrap va a capo) -> invio a capo forzato con /n
testoMain:string ="asiudjisdjikjxiosdjfciuerhuguergeruruigtueirui \nwdjjdwekdowkdpforkfoproerfpoerofkoekfoef \n dsfpkpoodkopkskspdkfdfèfgpgpè+djw";
}