export class Persona {
    //visto che non sono privati non servono getter e setters
    nome: string;
    cognome:string;
    anni:number;
    constructor(n: string, c:string, a:number){
        this.nome=n;
        this.cognome=c;
        this.anni=a;
    }
}
