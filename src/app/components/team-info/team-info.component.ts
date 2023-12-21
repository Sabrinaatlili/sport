import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  team:any={};
  id!:any;
  constructor(private activateRoute : ActivatedRoute,
              private teamService : TeamService) { }

  ngOnInit(): void {
this.id=this.activateRoute.snapshot.paramMap.get("id");
this.teamService.getTeamById(this.id).subscribe((data)=>{
console.log("Here is Response from BE ", data.team);
this.team=data.team;
})
    }

}
