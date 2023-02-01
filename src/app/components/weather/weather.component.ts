import { Component, OnInit } from '@angular/core';
import { WeatherCity } from 'src/app/helpers/interfaces';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  loader!: boolean;
  showLocations!: boolean;
  location: string = 'india';
  locationResult!: WeatherCity[];

  city!: any;
  currentWeather!: any;
  hourSeries!: any[];
  daySeries!: any[];
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.searchLocation();
  }
  searchLocation() {
    this.loader = true;
    this.weatherService.searchLocation(this.location).subscribe((res) => {
      this.locationResult = res;
      this.loader = false;
      this.showLocations = true;
      console.log(res);
    });
  }
  weather(city: WeatherCity) {
    this.showLocations = false;
    this.loader = true;
    this.city = city;

    this.weatherService.currentWeather(city.id).subscribe((res) => {
      this.loader = false;
      console.log(res);

      this.currentWeather = res;
    });
  }
}
