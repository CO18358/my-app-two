import { Component, OnInit } from '@angular/core';
import { Horoscope } from 'src/app/helpers/interfaces';
import { ZODIAC_DATA } from 'src/app/helpers/zodiac_data';
import { HoroscopeService } from 'src/app/services/horoscope/horoscope.service';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss'],
})
export class HoroscopeComponent implements OnInit {
  signs = ZODIAC_DATA;
  sign = 'libra';
  loader!: boolean;
  result!: {
    yesterday: Horoscope;
    today: Horoscope;
    tomorrow: Horoscope;
  };

  signData!: any;
  constructor(private horoscopeService: HoroscopeService) {}

  ngOnInit(): void {
    this.checkHoroscope();
  }

  checkHoroscope() {
    this.loader = true;
    this.horoscopeService.fetchHoroscope(this.sign).subscribe({
      next: (value) => {
        this.result = value;
        console.log(value);

        this.loader = false;
        this.signData = this.signs.find((ob) => ob.zodiacName == this.sign);
      },
      error: (e) => {
        console.log(e);
        this.loader = false;
      },
    });
  }
}
