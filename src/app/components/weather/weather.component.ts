import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherCity } from 'src/app/helpers/interfaces';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  loader!: boolean;
  showLocations!: boolean;
  location: string = 'india';
  locationResult!: WeatherCity[];

  city!: any;
  currentWeather!: any;
  hourSeries!: any[];
  daySeries!: any[];

  location$!: Subscription;
  current$!: Subscription;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.searchLocation();
  }
  searchLocation() {
    this.loader = true;
    this.location$ = this.weatherService
      .searchLocation(this.location)
      .subscribe((res) => {
        this.locationResult = res;
        this.loader = false;
        this.showLocations = true;
      });
  }
  weather(city: WeatherCity) {
    this.showLocations = false;
    this.loader = true;
    this.city = city;

    this.current$ = this.weatherService
      .currentWeather(city.id)
      .subscribe((res) => {
        this.loader = false;

        this.currentWeather = res;
      });
  }

  ngOnDestroy(): void {
    this.location$.unsubscribe();
    this.current$.unsubscribe();
  }
}
