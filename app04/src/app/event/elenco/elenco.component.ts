import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  display:string ='interact with the box';

  constructor() { }

  ngOnInit(): void {

  }
onClick(){
  this.display= 'you clicked on the box'
}

  onMouseOver(){
  this.display= 'you hovered on the box'
}

onMouseOut(){
  this.display= 'you exit the box'
}


onFocus(){
  this.display= 'INPUT FOCUSED!'
}

onBlur(){
  this.display= 'INPUT BLURRED!'
}

onInput(event: Event){
  //variabile temporanea
  let elemento:HTMLInputElement = event.target  as HTMLInputElement;
  this.display= 'ADDED INPUT!' + ' TYPE: '+elemento.tagName + ' content: ' + elemento.value;
  //manipolazione dello stile da javascript (si tolgono i trattini dai tag css)
  elemento.style.backgroundColor = "cyan";
  

}


}
