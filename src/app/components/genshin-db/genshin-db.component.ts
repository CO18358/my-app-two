import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenshinService } from 'src/app/services/genshin/genshin.service';

@Component({
  selector: 'app-genshin-db',
  templateUrl: './genshin-db.component.html',
  styleUrls: ['./genshin-db.component.scss'],
})
export class GenshinDbComponent implements OnInit {
  constructor(private router: Router, private genshinService: GenshinService) {}

  ngOnInit(): void {}
}
