import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pulsante',
  templateUrl: './pulsante.component.html',
  styleUrls: ['./pulsante.component.css']
})
export class PulsanteComponent implements OnInit {
  
  //mi preparo ad accettare in ingresso l'attributo 'testo'
  //inviato dal padre tramite property binding
  @Input() testo: string;

  //mi preparo a generare l'evento pulsanteCliccato (mediante un emettitore di eventi)
  //in modo che il componente padre possa catturarlo tramite un event binding
  @Output() pulsanteCliccato: EventEmitter<string>;

  constructor() { 
    //just a placeholder
    this.testo = 'testo pulsante';
    this.pulsanteCliccato = new EventEmitter<string>();
  }


  ngOnInit(): void {
  }
  
  
  onClick(): void{
    //qui devo mettere l'evento in modo che il padre possa rilevarlo
    this.pulsanteCliccato.emit(this.testo);
  }

}
