import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
@Input() playerInput:any;
@Output() newPlayers: EventEmitter<any> = new EventEmitter();



  constructor(private playerService : PlayerService) { }

  ngOnInit(): void {

  }
  deletePlayer(id:any){
    // appel du service player avec son methode deletePlayer()
    this.playerService.deletePlayer(id).subscribe((result)=>
    {    console.log("Here result from BE", result.msg);

        // Aprés la suppression on va retourner from DB le tableau players actualisée 
          this.playerService.getAllPlayers().subscribe((data)=>
          { console.log("Here data from BE ",data.players); 
            this.newPlayers.emit(data.players); 
            })
    });
  }

}
