import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadim-table',
  templateUrl: './stadim-table.component.html',
  styleUrls: ['./stadim-table.component.css']
})
export class StadimTableComponent implements OnInit {
  stadia:any=[];
  constructor(private stadiumService : StadiumService) { }

  ngOnInit(): void {
    this.stadiumService.getAllStadia().subscribe(
      (response)=>{
        console.log("Here Response From BE : ",response.stadiumsTab);
        this.stadia = response.stadiumsTab; 
      });
  }
  edit(id:any){}
  delete(id:any){}
  display(id:any){}

}
