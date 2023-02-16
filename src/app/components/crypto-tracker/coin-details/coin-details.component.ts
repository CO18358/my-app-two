import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoinInfo } from 'src/app/helpers/interfaces';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
})
export class CoinDetailsComponent implements OnInit, OnDestroy {
  loader!: boolean;
  coin!: CoinInfo;
  coinId: string | null;
  coin$!: Subscription;
  constructor(
    private cryptoService: CryptoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.coinId = this.route.snapshot.paramMap.get('coinId');
  }
  ngOnDestroy(): void {
    this.coin$.unsubscribe();
  }

  ngOnInit(): void {
    this.coinId
      ? this.getCoinInfo(this.coinId)
      : this.router.navigate(['/crypto/coins']);
  }

  getCoinInfo(coinId: string) {
    this.loader = true;
    this.coin$ = this.cryptoService.getCoinInfo(coinId).subscribe((res) => {
      this.coin = res;
      this.loader = false;
    });
  }

  viewCoin(url?: string) {
    url && window.open(url, '_blank');
  }
}
