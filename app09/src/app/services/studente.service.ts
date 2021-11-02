import { Injectable } from '@angular/core';
import { students } from '../data/students';
import { Student } from '../models/student';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {
  //server non serve un elenco
  //dati locali

  //inietto un altro servizio
  constructor(private ls:LoggerService) { }

  getAllStudents(): Student[]{
    this.ls.log('Studente Service - caricato elenco studenti');
    return students;
  }
}
