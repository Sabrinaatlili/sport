import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  editPlayerForm !:FormGroup;
  player: any={};
  players: any =[];
  id !:any;
  errorMsg:String="";
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private playerService : PlayerService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.id).subscribe((data)=>{
      console.log("Here is Response from BE: ",data.player);
      this.player=data.player;
    })
  }
  editPlayer(){
    console.log("Here is Player to edit :",this.player);
    this.playerService.editPlayer(this.player).subscribe((result)=>{
      if (result) {
        this.router.navigate(['/dashboard'])
      } else {
        this.errorMsg= "Error in Editing"
      }
    })
  }

}
