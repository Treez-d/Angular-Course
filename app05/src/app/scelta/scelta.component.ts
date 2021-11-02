import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scelta',
  templateUrl: './scelta.component.html',
  styleUrls: ['./scelta.component.css']
})
export class SceltaComponent implements OnInit {

  visibile:boolean = true;
  nascosto:boolean = false;
  numero : number = 6;
  
  mostraComp:boolean = true;

  persona = {
    nome: 'beomgyu',
    cognome: 'choi'
  }

  colore: string = 'blue';

  constructor() { }

  ngOnInit(): void {
  }

}
