import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'app-gestione-libri',
  templateUrl: './gestione-libri.component.html',
  styleUrls: ['./gestione-libri.component.css']
})
export class GestioneLibriComponent implements OnInit {

  libri: Libro[];

  libroSelezionato?: Libro;

  constructor() { 
    this.libri=[
      new Libro(112, 'La Fenice', 'Patrizia', 2021),
      new Libro(340, "Finalmente un po' di rispetto", 'Treez', 2022),
      new Libro(501, 'Quando si ruota la frittata', 'Idiotnotsavant', 2018),
    ];
  }

  ngOnInit(): void {
  }
  recuperaSelezione(libro:Libro){
    
    this.libroSelezionato = libro;
  }

}
