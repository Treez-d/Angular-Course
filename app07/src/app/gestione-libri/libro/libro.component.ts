import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  //alias
  @Input("datiLibro") libro:Libro;

  @Output() selezionato : EventEmitter<Libro>;


  constructor() { 
    this.libro = new Libro(11, "Prova", "Faker", 1234);
    this.selezionato = new EventEmitter<Libro>();
  }

  ngOnInit(): void {

  }
  onClick():void{
    //inviamo al padre il libro selezionato
    this.selezionato.emit(this.libro);
  }

}
