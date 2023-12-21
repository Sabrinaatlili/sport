import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() matchInput:any;
  //  creation d'une nouvelle instance eventEmitter from angular/Core
  @Output() newMatches : EventEmitter<any> = new EventEmitter();
  
  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }
  scoreColor(a:number, b:number){
    if (a>b) {
      return "green"
    } else if (a<b) {
      return "yellow"
    } else {
      return "blue"
    } 
  }
  scoreResult(a:number, b:number){
    if (a>b) {
      return "(win)"
    } else if (a<b) {
      return "(loss)"
    } else {
      return "(draw)"

    } 
  }
  Result(a:number, b:number){
    let T=[];
    if (a>b) {
      T=["(Win)","green"];
    } else if (a<b) {
      T=["(Loss)","yellow"];
    } else {
      T=["(Draw)","red"];
      
    } 
    return T
  }
  deleteMatch(id:any){
    this.matchService.deleteMatch(id).subscribe((result)=>
    {
      console.log("Here result from BE", result.msg);
      // Reload pour qu'on puisse afficher le tableau matches actualisé
      this.matchService.getAllMatches().subscribe((data)=>
      {
        console.log("Here data from BE ",data.matches);
        this.newMatches.emit(data.matches);
      })
      
    })

  }

}
