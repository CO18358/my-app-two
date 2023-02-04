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
  loader!: boolean;
  coin!: CoinInfo;

  constructor(
    private cryptoService: CryptoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const coinId = this.route.snapshot.paramMap.get('coinId');
    coinId ? this.getCoinInfo(coinId) : this.router.navigate(['/crypto/coins']);
  }

  ngOnInit(): void {}

  getCoinInfo(coinId: string) {
    this.loader = true;
    this.cryptoService.getCoinInfo(coinId).subscribe((res) => {
      this.coin = res;

      this.loader = false;
    });
  }

  viewCoin(url?: string) {
    url && window.open(url, '_blank');
  }
}
