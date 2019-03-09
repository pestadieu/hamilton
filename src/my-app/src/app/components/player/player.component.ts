import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';

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
    // Hide the danger before the page loads
    var dangerAlert = document.getElementById('danger-alert');
    dangerAlert.style.display = 'none';
    
    // alert danger after 3 mins
    function testFunction() {
      console.log('hello all');
      
     // var isDanger = true;
     var isDanger = true;
     console.log('This is a the player componet');

      if(isDanger) {
        // Hide the player and 
        var playerHide = document.getElementById("player").style.display = 'none';

        // show the danger message
        dangerAlert.style.display = 'block';
        // Show the notification
        var notificationHide = document.getElementById("notification").style.display = 'none';
        // Show the hvac
        var hvacHide = document.getElementById("hvac").style.display = 'none';

      } else {
      
    }
    };
    
    setTimeout(testFunction, 60000);

    // testFunction();
   
    // console.log(testPlayer);
  }
}
