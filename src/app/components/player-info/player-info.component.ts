import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  player:any={};
   id!:any;
  constructor(private activatedRoute: ActivatedRoute,
              private playerService: PlayerService) {
                         }

  ngOnInit(): void {
this.id=this.activatedRoute.snapshot.paramMap.get("id");
this.playerService.getPlayerById(this.id).subscribe((data)=>{
  console.log("Here is response from BE : ",data.player);
  this.player=data.player;
  
})
  }

}
