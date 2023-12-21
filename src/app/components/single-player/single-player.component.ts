import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent implements OnInit {
@Input() playerInput:any;
@Output() newPlayers: EventEmitter<any>= new EventEmitter();
  constructor( private playerService:PlayerService) { }

  ngOnInit(): void {
  }
  deletePlayer(id:any){
    this.playerService.deletePlayer(id).subscribe((response)=>{
      console.log("Here is response from BE: ",response.msg);
      // aprés supression on récupére tous le tableau teams from DB avec un element supprimé
      this.playerService.getAllPlayers().subscribe((response)=>{
        console.log("Here is response from BE", response.players);
        this.newPlayers.emit(response.players);
      })
         })
  }

}
