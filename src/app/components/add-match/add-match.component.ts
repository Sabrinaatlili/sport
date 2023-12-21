import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
// formid
addMatchForm!:FormGroup;
match:any={};


  constructor( private matchService:MatchService,
              private router:Router) { }

  ngOnInit(): void {
    // this.addMatchForm=this.formBuilder.group({
    //   teamOne:["",[Validators.required,Validators.minLength(2)]],
    //   teamTwo:["",[Validators.required,Validators.minLength(2)]],
    //   scoreOne:["",[Validators.required,Validators.minLength(1),Validators.maxLength(3)]],
    //   scoreTwo:["",[Validators.required,Validators.minLength(1),Validators.maxLength(3)]]
    // });
  }
  //  Fonction va etre executer lors de click du boutton
  addMatch(){
    console.log("here is mu function add Match",this.match.value);
    this.matchService.addMatch(this.match).subscribe((result)=>{
      console.log("Here is response ",result.msg);
      this.router.navigate(['/dashboard']);  
    });


  }

}
