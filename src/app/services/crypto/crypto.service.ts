import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { CoinData, CoinInfo } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  coinListUrl =
    'https://api.coingecko.com/api/v3/coins/markets?sparkline=false';

  coinDetailsUrl = 'https://api.coingecko.com/api/v3/coins';
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
}
