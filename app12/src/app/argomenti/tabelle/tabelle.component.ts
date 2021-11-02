import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelle',
  templateUrl: './tabelle.component.html',
  styleUrls: ['./tabelle.component.css']
})
export class TabelleComponent implements OnInit {


  txt = [
    {
      id:1,
      nam:'sb',
      age:'22'
    },
    {
      id:2,
      nam:'yj',
      age:'22'
    },
    {
      id:3,
      nam:'bg',
      age:'22'
    } ,{
      id:4,
      nam:'th',
      age:'22'
    },
    {
      id:5,
      nam:'hk',
      age:'22'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
