import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempi-pipes',
  templateUrl: './esempi-pipes.component.html',
  styleUrls: ['./esempi-pipes.component.css']
})
export class EsempiPipesComponent implements OnInit {

  num:number=123.456;
  nome: string= 'Bahiyyih' ;
  iva: number = 0.22;
  oggi: Date = new Date();
  price:number=1234.5678;


  constructor() { }

  ngOnInit(): void {
  }

}
