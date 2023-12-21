import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css']
})
export class SingleTeamComponent implements OnInit {
@Input() teamInput: any;
@Output() newTeams : EventEmitter<any>= new EventEmitter();
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }
  deleteTeam(id:any){
    this.teamService.deleteTeam(id).subscribe((response)=>{
      console.log("Here is response from BE: ",response.msg);
      // aprés supression on récupére tous le tableau teams from DB avec un element supprimé
      this.teamService.getAllTeams().subscribe((response)=>{
        console.log("Here is response from BE", response.teams);
        this.newTeams.emit(response.teams);
      })
         })
  }
}
