import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CoinData, CoinInfo } from 'src/app/helpers/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  coinListUrl =
    'https://api.coingecko.com/api/v3/coins/markets?sparkline=false';

  coinDetailsUrl = 'https://api.coingecko.com/api/v3/coins';

  symbolsUrl = 'https://api.exchangerate.host/symbols';
  coversionUrl = 'https://api.exchangerate.host/convert';
  constructor(private http: HttpClient) {}

  getCoinsArray(
    currency: string,
    orderBy: string,
    limit: number,
    pageNum: number
  ) {
    const url = `${this.coinListUrl}&vs_currency=${currency}&order=${orderBy}&per_page=${limit}&page=${pageNum}`;
    return this.http.get<any[]>(url).pipe(
      map((coins): CoinData[] => {
        return coins.map((coin) => {
          return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            thumb: coin.image,
            price: coin.current_price,
            priceChange: coin.price_change_percentage_24h,
            mktCap: coin.market_cap,
            volume: coin.total_volume,
          };
        });
      })
    );
  }

  getCoinInfo(coinId: string) {
    const url = `${this.coinDetailsUrl}/${coinId}?tickers=false&market_data=false&developer_data=false&community_data=false`;
    return this.http.get(url).pipe(
      map((coin: any): CoinInfo => {
        return {
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          description: coin.description.en,
          url: coin.links.homepage[0],
          image: coin.image.large,
          upVotes: coin.sentiment_votes_up_percentage,
          downVotes: coin.sentiment_votes_down_percentage,
          rank: coin.market_cap_rank,
        };
      })
    );
  }

  getSymbols() {
    return this.http.get(this.symbolsUrl).pipe(
      map((res: any) => {
        return Object.keys(res.symbols).map((key) => {
          return res.symbols[key];
        }) as any[];
      })
    );
  }

  getExchangeRate(from: string, to: string, amount: number) {
    return this.http
      .get(`${this.coversionUrl}?from=${from}&to=${to}&amount=${amount}`)
      .pipe(map((res: any) => res.result));
  }
}
