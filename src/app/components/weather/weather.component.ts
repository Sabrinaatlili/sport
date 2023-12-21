import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchWeatherForm!: FormGroup;
  weatherResult: any;
  constructor(private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
   this.searchWeatherForm = this.formBuilder.group({
    city:["",[Validators.required,Validators.minLength(5)]],
   })
  }
search(){
this.weatherService.search(this.searchWeatherForm.value).subscribe(
  (data)=>{  console.log("Here is response From API ",data.result);
  this.weatherResult= data.result}
);
}
}
