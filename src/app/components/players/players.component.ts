import { Component, Input, OnInit, Output } from '@angular/core';
import { playersData } from 'src/app/data/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

 players:any=[];
 p:any={};
  constructor( private playerService : PlayerService) { }

  ngOnInit(): void {
    // this.players=playersData;
    this.playerService.getAllPlayers().subscribe((response)=>{
      console.log("Here is response from BE",response.players);
      this.players=response.players;

    })

  }
  updatePlayers(T:any){
    this.players=T;
  }

}
