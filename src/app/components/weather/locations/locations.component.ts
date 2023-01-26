import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  loader!: boolean;
  location: string = 'india';
  locationResult!: any[];
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.searchLocation();
  }
  searchLocation() {
    this.loader = true;
    this.weatherService.searchLocation(this.location).subscribe((res) => {
      this.locationResult = res;
      this.loader = false;
      console.log(res);
    });
  }
  weather(id: number) {
    this.router.navigate(['/weather/panel', id]);
  }
}
