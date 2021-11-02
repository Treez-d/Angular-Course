import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {

  percorsoImg:string="assets/img/sk2.png";
  altImg: string = 'standards';
  linkUrl: string = 'https://www.vlive.tv ';
  newContent:string = 'lemme watch the mf vlive'
  peso:number = 44;
  bloccato: boolean= true;
  bloccato2: boolean= false;
  stileTesto:string = 'font-weight:bold; color:purple, font-size:1.4em;';
  classeTesto: string ="evidenziato";



  constructor() { }

  ngOnInit(): void {
  }

}
