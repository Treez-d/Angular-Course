import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona = {
    nome: 'Beomgyu',
    cognome: 'Choi',
    anni:'20'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
