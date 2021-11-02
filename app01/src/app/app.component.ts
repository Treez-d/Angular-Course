//ci dice in codice come è fatta a livello di codice il nostro component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//dentro la classe ci sono gli attributi dei componenti/tipidiclassi/interfacce
export class AppComponent {
  //titolo dell'app principale
  title = 'app01';
}
