import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  foto = {
    src:"assets/img/sk.jpg",
    alt:"wbk",
    caption: "basically a romcom"
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
