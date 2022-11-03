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
  days = ['yesterday', 'today', 'tomorrow'];
  querySign = 'libra';
  queryDay = 'today';
  result: Horoscope = { horoscope: '', signData: '' };
  showFullText = false;
  constructor(private horoscopeService: HoroscopeService) {}

  ngOnInit(): void {
    this.checkHoroscope();
  }

  checkHoroscope() {
    this.horoscopeService
      .fetchHoroscope(this.querySign, this.queryDay)
      .subscribe({
        next: (value) => {
          this.result.horoscope = value;
          this.getSignDetails(this.querySign);
        },
        error: (e) => {
          console.log(e);
        },
      });
  }
  getSignDetails(sign: string) {
    this.result.signData = this.signs.find((ob) => ob.zodiacName == sign);
  }
}
