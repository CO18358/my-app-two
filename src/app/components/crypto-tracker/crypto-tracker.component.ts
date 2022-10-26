import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { CoinData, CoinInfo } from 'src/app/helpers/interfaces';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-crypto-tracker',
  templateUrl: './crypto-tracker.component.html',
  styleUrls: ['./crypto-tracker.component.scss'],
})
export class CryptoTrackerComponent implements OnInit {
  showSpinner!: boolean;
  showCoin!: boolean;

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
    {
      value: 'btc',
      symbol: '₿',
    },
    {
      value: 'eth',
      symbol: 'Ξ',
    },
    {
      value: 'ltc',
      symbol: 'Ł',
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

  coinList!: CoinData[];
  coinId = 'bitcoin';
  coinData!: CoinInfo;
  filter = new FormControl();
  filteredCoins!: Observable<CoinData[]>;

  currencyMenu: boolean = false;
  symbolsList!: any[];
  fromSymbol!: string;
  toSymbol!: string;
  amount!: number;
  conversionResult!: number;
  miniLoader: boolean = false;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.getCoinList();
    this.filteredCoins = this.filter.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    this.cryptoService.getSymbols().subscribe((res) => {
      this.symbolsList = res;
    });
  }

  convert() {
    this.cryptoService
      .getExchangeRate(this.fromSymbol, this.toSymbol, this.amount)
      .subscribe((res) => {
        this.conversionResult = res;
      });
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

  getCoinInfo(coinId: string) {
    this.showSpinner = true;
    this.showCoin = true;
    this.cryptoService
      .getCoinInfo(coinId)
      .subscribe((res) => (this.coinData = res));
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }

  home() {
    this.showCoin = false;
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

  private _filter(value: string): CoinData[] {
    const filterValue = value.toLowerCase();

    return this.coinList.filter((coin) =>
      coin.name.toLowerCase().includes(filterValue)
    );
  }
}
