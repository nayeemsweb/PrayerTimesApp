import { Component, OnInit } from '@angular/core';
import { PrayerTimes } from './models/prayer-times.model';
import { PrayerTimesService } from './services/prayer-times.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private prayerTimes : PrayerTimesService){}

  cityName : string = 'Dhaka';
  countryName : string = 'Bangladesh';
  prayerData? : PrayerTimes;
  
  ngOnInit(): void {
    this.getPrayerTimesData(this.cityName, this.countryName);
    this.cityName = '';
    this.countryName = '';
  }

  onSubmit(){
    this.getPrayerTimesData(this.cityName, this.countryName);
    this.cityName = '';
    this.countryName = '';
  }

  private getPrayerTimesData(cityName : string, countryName : string){
    this.prayerTimes.getPrayerTimes(cityName, countryName)
    .subscribe({
      next : (response) => {
        this.prayerData = response;
        console.log(response);
      }
    });
  }
}
