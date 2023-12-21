import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
editTeamForm !:FormGroup;
team: any={};
teams: any =[];
id !:any;
errorMsg:String="";
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private teamService : TeamService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    this.teamService.getTeamById(this.id).subscribe((data)=>{
      console.log("Here is Response from BE: ",data.team);
      this.team=data.team;
    })
  }
  editTeam(){
    console.log("Here is Team to edit :",this.team);
    this.teamService.editTeam(this.team).subscribe((result)=>{
      if (result) {
        this.router.navigate(['/dashboard'])
      } else {
        this.errorMsg= "Error in Editing"
      }
    })
    
  }

}
