export class Orologio {
    //costruttore semplificato 
    constructor(public ore: number, public minuti: number){}

    //metodo che restituisce un'ora formattata in hh:mm
    vediOrario(): string{
        let oreString= this.ore + '';
        let minutiString = this.minuti + '';

        if(oreString.length < 2)
        oreString = '0' + this.ore;

        if(minutiString.length < 2)
        minutiString = '0' + this.minuti;

        return 'sono le ore ' + oreString + ':' + minutiString;
    }
}
