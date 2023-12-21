import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  match:any={};
  id!:any;
  // matches:any=[];
  constructor(private activateRoute:ActivatedRoute,
    private matchService: MatchService) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get("id");
    // this.matches=matchesData;  
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id==this.id) {
    //     this.match=this.matches[i];
    //     break;
    //   }
      
    // }
    this.matchService.getMatchesById(this.id).subscribe((result) => { 
      console.log("Here response from BE : ",result.match);
      this.match = result.match })
  }

}
