import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  // formid
addTeamForm!:FormGroup;
team:any= {};
stadiums:any=[];
stadiumId : any;

  constructor( private formBuilder:FormBuilder,
    private teamService :TeamService ,
    private stadiumService : StadiumService,
    private router:Router) { }

  ngOnInit(): void {
    this.stadiumService.getAllStadia().subscribe((response)=>{
      console.log("Here response from BE : ",response.stadiumsTab);
      this.stadiums=response.stadiumsTab;
      
      
    });
  }
  //  Fonction va etre executer lors de click du boutton
  addTeam(){
    console.log("here is my function add Team: ",this.team);
    this.team.sId=this.stadiumId;
    this.teamService.addTeam(this.team).subscribe((result)=>{
      console.log("Here is response ",result.msg); 
      this.router.navigate(['dashboard'])
    });
  }
  selectStadium(evt:any){
    console.log("Here Stadium id after selected : ", evt.target.value);
    this.stadiumId=evt.target.value;
  }

}
