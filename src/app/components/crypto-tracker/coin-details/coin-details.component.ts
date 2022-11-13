import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoinInfo } from 'src/app/helpers/interfaces';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss'],
})
export class CoinDetailsComponent implements OnInit {
  showSpinner!: boolean;
  coinData!: CoinInfo;
  constructor(
    private cryptoService: CryptoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const coinId = this.route.snapshot.paramMap.get('coinId');
    coinId ? this.getCoinInfo(coinId) : console.log(coinId);
  }

  ngOnInit(): void {}

  getCoinInfo(coinId: string) {
    this.showSpinner = true;
    this.cryptoService
      .getCoinInfo(coinId)
      .subscribe((res) => (this.coinData = res));
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
  }
}
