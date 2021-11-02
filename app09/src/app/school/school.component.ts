import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { LoggerService } from '../services/logger.service';
import { StudenteService } from '../services/studente.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
studenti: Student[];
orderMediaAsc:boolean;
orderMatricolaAsc:boolean;
orderNomeAsc:boolean;

  constructor(private ss:StudenteService, private ls:LoggerService) {
    this.studenti =[];
    this.orderMediaAsc =true;
    this.orderMatricolaAsc= true;
    this.orderNomeAsc=true;
   }

  ngOnInit(): void {
    this.studenti= this.ss.getAllStudents();
  }

  sortStudentsByMedia():void{
    this.ls.log("scuola: sturenti ordinati per media" + (this.orderMediaAsc? ' decrescente' : ' crescente'));
    if(this.orderMediaAsc){
      this.studenti.sort(
        (a,b)=>{return a.media - b.media}
      
      );
    } else{
      this.studenti.sort(
        (a,b)=>{return b.media - a.media}
      
      );
    }
    
    this.orderMediaAsc = !this.orderMediaAsc;
   
  }
  sortStudentsByMatricola():void{

    if(this.orderMatricolaAsc){
      this.studenti.sort(
        (a,b)=>{return a.matricola - b.matricola}
      );
    } else{
      this.studenti.sort(
        (a,b)=>{return b.matricola - a.matricola}
      );
    }
    this.orderMatricolaAsc = !this.orderMatricolaAsc;
   
  }

  /* sortStudentsByNome():void{

    this.studenti.sort(
      (a, b)=>{
        if (a.nome>b.nome){
          return 1;
        } else if (a.nome<b.nome){
          return -1;
        } else return 0
      }
    }else
    this.orderNomeAsc = !this.orderNomeAsc;} */
   
  

}
