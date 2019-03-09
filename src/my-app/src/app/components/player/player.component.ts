import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  //styleUrls: [ './app.component.css' ]
})
export class PlayerComponent implements OnInit{
  
  album: object; 
  tracks: object[];

  constructor(){

  }

  ngOnInit(){
  }
}
