import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  // déclaration du @destinataire 
searchUrl: string="http://localhost:3000/weather";

  constructor(private httpClient: HttpClient) { }
  search(city:any){
    return this.httpClient.post<{result: any}>(this.searchUrl,city);
}
}
