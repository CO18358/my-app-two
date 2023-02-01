import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { CoinData } from 'src/app/helpers/interfaces';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
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
  coinList!: CoinData[];
  filter = new FormControl();
  filteredCoins!: Observable<CoinData[]>;

  symbolsList!: any[];
  fromSymbol!: string;
  toSymbol!: string;
  conversionResult!: number;
  constructor(private cryptoService: CryptoService, private router: Router) {}

  ngOnInit(): void {
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
      .getExchangeRate(this.fromSymbol, this.toSymbol)
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

  coinDetails(id: string) {
    this.router.navigate(['/crypto/coins', id]);
  }
}
