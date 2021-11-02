import { Component } from '@angular/core';


//WE NEED TO TELL ANGULAR WHERE TO FIND THIS FUNCTION SO WE DO HE IMPORT
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string= 'Product List';  
}
