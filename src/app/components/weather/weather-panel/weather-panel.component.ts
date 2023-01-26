import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-weather-panel',
  templateUrl: './weather-panel.component.html',
  styleUrls: ['./weather-panel.component.scss'],
})
export class WeatherPanelComponent implements OnInit {
  showLoader!: boolean;
  setLocation!: any;
  currentWeather!: any;
  hourSeries!: any[];
  daySeries!: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
  ) {
    const id = this.route.snapshot.paramMap.get('locationId');
    id
      ? this.weather(parseInt(id))
      : this.router.navigate(['/weather/locations']);
  }

  ngOnInit(): void {}
  weather(id: number) {
    this.showLoader = true;
    this.weatherService.getWeather(id).subscribe((res) => {
      this.showLoader = false;
      this.setLocation = res.location;
      this.currentWeather = res.current;
      this.hourSeries = res.hourly;
      this.daySeries = res.daily;
    });
  }
}
