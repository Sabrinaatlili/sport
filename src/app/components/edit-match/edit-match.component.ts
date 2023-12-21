import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  editMatchForm!: FormGroup;
  match: any = {};
  matches: any = [];
  id: any;
  errorMsg:String="";
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.matchService.getMatchesById(this.id).subscribe((result) => { this.match = result.match });
    // Parcours statique
    // this.matches=matchesData;
    // for (let i = 0; i < this.matches.length; i++) {
    //if (this.matches[i].id==this.id) {
    //this.match=this.matches[i];
    //}
    //}
  }
  editMatch() {
    console.log("Here is match to edit : ",this.match);    
    this.matchService.editMatch(this.match).subscribe((result)=>{
      if (result.isUpdated) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMsg="Error in Editing";
      }
      
    });

  }

}
