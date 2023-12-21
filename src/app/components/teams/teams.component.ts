import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams: any=[];
t: any={};
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((data)=>{
      console.log("Here is response from BE", data.teams);
      this.teams=data.teams;
      
    })
  }
  updateTeams(T:any){
    this.teams=T;
  }

}
