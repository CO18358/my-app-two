import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  location: string = 'Chandigarh';
  locationResult!: any[];
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.searchLocation();
  }
  searchLocation() {
    this.weatherService.searchLocation(this.location).subscribe((res) => {
      this.locationResult = res;
    });
  }
  weather(id: number) {
    this.router.navigate(['/weather/panel', id]);
  }
}
