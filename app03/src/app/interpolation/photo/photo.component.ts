import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

photo ={
  "albumId": 1,
  "id": 3,
  "title": "officia porro iure quia iusto qui ipsa ut modi",
  "url": "https://via.placeholder.com/600/24f355",
  "thumbnailUrl": "https://via.placeholder.com/150/24f355"
}
  constructor() { }

  ngOnInit(): void {
  }


}
