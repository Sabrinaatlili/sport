import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playersData } from 'src/app/data/data';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players:any=[];
  player:any={};
  constructor( private router:Router, private playerService: PlayerService) { }

  ngOnInit(): void {
    //  this.players=playersData;
    // appel de la méthode GetAllPlayers du service Player
  //  this.matches=matchesData;

  this.playerService.getAllPlayers().subscribe((response)=>{
    console.log("Here is response from BE Get All Players ",response.players);
    this.players=response.players;
  });
  }
  goToDisplay(id:number){
    this.router.navigate([`playerInfo/${id}`]); 
  }
  goToEdit(id:number){
    this.router.navigate([`editPlayer/${id}`]);
    }
    delete(id:number){
      // console.log(`here object number ${id} deleted`);
      this.playerService.deletePlayer(id).subscribe((response)=>{
        console.log("Here response from BE ",response.msg);
  
        this.playerService.getAllPlayers().subscribe(
          (response)=>{
          console.log("Here is response ",response);
          this.players=response.players;
        });
        
      });
      
    }

}
