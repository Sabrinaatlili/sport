import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
  addStadiumForm !: FormGroup;
  stadium : any={};
  constructor(private stadiumService : StadiumService,
    private router:Router) { }

  ngOnInit(): void {
  }
  addStadium(){
    console.log("Here stadium ",this.stadium);
    this.stadiumService.addStadium(this.stadium).subscribe(
      (response)=>{
        console.log(" Here response from BE : ",response.msg);
        this.router.navigate(['dashboard'])
      }
    );

    
  }

}

