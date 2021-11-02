import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  msg:number;

  constructor() {
    this.msg=0;
   }

  ngOnInit(): void {
  }

  incrementa():void{
    this.msg++;
  }

}
