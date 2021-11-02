import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.css']
})
export class EsempioComponent implements OnInit {

contatore: number = 0;

display:string = "click on the button";

dis:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    ///console.log('the button was clicked');
    this.contatore ++;
    this.display = "the button was clicked " + this.contatore + " times";
  }

  onReset(){
    this.contatore=0;
    this.display = "the button was clicked 0 times";
  }

  changeStatus(){
    this.dis = !this.dis;
  }

}
