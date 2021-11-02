import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  voci:string[];
  scelta:string;

  constructor() {
    this.voci=['blue', 'purple', 'green', 'pink', 'yellow', 'orange', 'red'];
    this.scelta="";
   }

  ngOnInit(): void {
  }

  choose(e:any){
    this.scelta =e.target.value;
  }
  
}
