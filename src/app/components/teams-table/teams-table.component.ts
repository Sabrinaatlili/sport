import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamsData } from 'src/app/data/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams:any=[];
  t:any={};
  constructor( private router:Router,
                private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((response)=>{
      console.log("Here is response ",response.teams);
      this.teams=response.teams;
    });
    
  }
  goToDisplay(id:number){
    this.router.navigate([`teamInfo/${id}`])
   }
   goToDelete(id:number){
     // console.log(`here object number ${id} deleted`);
     this.teamService.deleteTeam(id).subscribe((response)=>{
      console.log("Here response from BE ",response.msg);

      this.teamService.getAllTeams().subscribe(
        (response)=>{
        console.log("Here is response ",response);
        this.teams=response.teams;
      });
      
    });
   }
   goToEdit(id:number){
    this.router.navigate([`editTeam/${id}`])
   }


}
