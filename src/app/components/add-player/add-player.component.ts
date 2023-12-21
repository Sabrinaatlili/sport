import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm!: FormGroup;
  player: any = {};
  team: any = {};
  teams: any = [];
  idTeam: any;
  constructor(private playerService: PlayerService,
    private teamService: TeamService,
    private router: Router) { }

  ngOnInit(): void {
// Get all teams pour afficher dans select option
    this.teamService.getAllTeams().subscribe((data) => { this.teams = data.teams })
  }
  //  Fonction add Player va etre executer lors de click du boutton
  addPlayer() {
    console.log("here is my function add Player", this.player);
    this.player.teamId = this.idTeam;
    // l'aapel du méthode addPlayer du service player pour ajouter un player
    this.playerService.addPlayer(this.player).subscribe((result) => {
      console.log('Here is result of add Player from BE : ', result.msg);
       this.router.navigate(['/dashboard']);
    });
  }
  selectTeam(evt: any) {
    console.log("Here is event : ", evt.target.value);
    this.idTeam = evt.target.value;

  }
}
