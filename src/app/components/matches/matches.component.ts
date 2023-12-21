import { Component, OnInit } from '@angular/core';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  // la déclaration des varibles c'est avant le constructeur
  // matches:any=[{},{},{},{}];
  matches:any=[];
  m:any={};
  // Déclaration de Constructeur 
  constructor( private matchService: MatchService) { }
// cest une fonction qui s'execute lors de l'appel du component
  ngOnInit(): void {
    // on déclare les elements de matches ici 
    // this.matches=matchesData;
    // this.matches se pointer sur la variablesdu component
this.matchService.getAllMatches().subscribe((data)=>{ 
  console.log("here is response from BE ",data.matches);
  
  this.matches=data.matches})


  }
  updateMatches(T:any){
    this.matches=T;
  }

}
