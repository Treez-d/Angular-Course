import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mio-componente',
  templateUrl: './mio-componente.component.html',
  styleUrls: ['./mio-componente.component.css']
})
export class MioComponenteComponent implements OnInit {

  //optional value 
  nome?:string='Beomgyu';
  prezzo: number=1200;
  numeroPezzi: number =5;
  cognome:string = 'Choi';

  oggi: Date = new Date();//data di oggi

  link:string = 'http://www.google.com';
  imgPath:string = 'assets/img/sk.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
