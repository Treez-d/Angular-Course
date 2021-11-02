import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterazione',
  templateUrl: './iterazione.component.html',
  styleUrls: ['./iterazione.component.css']
})
export class IterazioneComponent implements OnInit {


  colors: string[] =['yellow', 'mint', 'purple','red', 'blue'];

persone=[{
  nome: 'soobin',
  cognome:'choi'
},
{
  nome: 'yeonjun',
  cognome:'choi'
},
{
  nome: 'beomgyu',
  cognome:'choi'
},
{
  nome: 'taehyun',
  cognome:'kang'
},
{
  nome: 'kai kamal',
  cognome:'huening'
},
]

  constructor() { }

  ngOnInit(): void {
  }

}
