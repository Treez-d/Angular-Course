import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atleta } from 'src/app/models/atleta';
import { AtletaService } from '../atleta.service';

@Component({
  selector: 'app-nuovo-atleta',
  templateUrl: './nuovo-atleta.component.html',
  styleUrls: ['./nuovo-atleta.component.css']
})
export class NuovoAtletaComponent implements OnInit {

  constructor(private as: AtletaService, private router: Router) {}

  ngOnInit(): void {
  }
  
  nuovoAtleta(i:any, n:any, p:any):void{
    let atleta:Atleta={
      id: i.value,
      nome: n.value,
      punteggio: p.value
    }
    this.as.addAtleta(atleta);
    this.router.navigateByUrl('/Atleti');

  }


}
