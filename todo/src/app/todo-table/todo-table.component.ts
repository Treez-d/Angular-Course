import { Component, OnInit } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css']
})
export class TodoTableComponent implements OnInit {



  tableHeaders :string[] = ['User ID', 'ID', 'Title', 'Completed' ];
  toDoList : ToDo[];
  completed: boolean= true;

 /*document.getElementByClass('.completed').style.color= 'mediumspringgreen';*/

  
  constructor() { 

    this.toDoList = [
      new ToDo(1,1,'delectus aut autem',false),
      new ToDo(1,2,'quis ut nam facilis et officia qui',false),
      new ToDo(1,3,'fugiat veniam minus',false),
      new ToDo(1,4,'et porro tempora',true),
      new ToDo(1,5,'laboriosam mollitia et enim quasi adipisci quia provident illum',false),
      new ToDo(1,6,'qui ullam ratione quibusdam voluptatem quia omnis',false),
      new ToDo(1,7,'illo expedita consequatur quia in',false),
      new ToDo(1,8,'quo adipisci enim quam ut ab',true),
      new ToDo(1,9,'molestiae perspiciatis ipsa',false),
      new ToDo(1,10,'illo est ratione doloremque quia maiores au',true),
    ];

    
    

  }



  ngOnInit(): void {
    
  }




}
