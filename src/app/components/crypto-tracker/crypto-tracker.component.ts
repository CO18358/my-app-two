import { Component, OnInit } from '@angular/core';
import { CoinData, CoinInfo } from 'src/app/models/interfaces';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-crypto-tracker',
  templateUrl: './crypto-tracker.component.html',
  styleUrls: ['./crypto-tracker.component.scss'],
})
export class CryptoTrackerComponent implements OnInit {
  showSpinner!: boolean;

  vsCurrencies = [
    {
      value: 'usd',
      symbol: '$',
    },
    {
      value: 'eur',
      symbol: '€',
    },
    {
      value: 'jpy',
      symbol: '¥',
    },
    {
      value: 'inr',
      symbol: '₹',
    },
  ];
  curr = this.vsCurrencies[0];
  sizes = [50, 100, 150, 200, 250];
  setSize = this.sizes[1];
  pageNum = 1;
  orders = [
    {
      value: 'market_cap_desc',
      faceValue: 'Market Cap ↓',
    },
    {
      value: 'market_cap_asc',
      faceValue: 'Market Cap ↑',
    },
    {
      value: 'volume_desc',
      faceValue: 'Volume ↓',
    },
    {
      value: 'volume_asc',
      faceValue: 'Volume ↑',
    },
  ];
  orderBy = this.orders[0];
  filter!: string;

  coinList!: CoinData[];

  coinId = 'bitcoin';

  coinInfo!: CoinInfo;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.getCoinList();
    this.getCoinInfo();
  }

  getCoinList() {
    this.showSpinner = true;
    this.cryptoService
      .getCoinsArray(
        this.curr.value,
        this.orderBy.value,
        this.setSize,
        this.pageNum
      )
      .subscribe((res) => {
        this.coinList = res;
        this.showSpinner = false;
      });
  }

  getCoinInfo() {
    this.cryptoService
      .getCoinInfo(this.coinId)
      .subscribe((res) => (this.coinInfo = res));
  }

  roundUp(value: string): number {
    return +parseFloat(value).toFixed(3);
  }

  prevPage() {
    if (this.pageNum > 1) {
      this.pageNum--;
      this.getCoinList();
    }
  }

  nextPage() {
    this.pageNum++;
    this.getCoinList();
  }
}
