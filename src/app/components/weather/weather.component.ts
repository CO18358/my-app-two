import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  location: string = '';
  locationResult!: any[];
  showWeather!: boolean;
  currentWeather!: any;
  hourSeries!: any[];
  daySeries!: any[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weather(101274746);
  }
  searchLocation() {
    this.weatherService.searchLocation(this.location).subscribe((res) => {
      this.locationResult = res;
      this.showWeather = false;
    });
  }

  weather(id: number) {
    this.weatherService.getWeather(id).subscribe((res) => {
      console.log(res);
      this.currentWeather = res.current;
      this.hourSeries = res.hourly;
      this.daySeries = res.daily;
      this.showWeather = true;
    });
  }
}
