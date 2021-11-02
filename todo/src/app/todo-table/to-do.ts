import { ThrowStmt } from "@angular/compiler";
import { Title } from "@angular/platform-browser";

export class ToDo 
{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
   
   constructor (uid: number, id:number, t:string, c:boolean) {
    this.userId = uid;
    this.id = id;
    this.title = t;
    this.completed = c;
}
}
