import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OmdbService } from 'src/app/services/omdb/omdb.service';

@Component({
  selector: 'app-movie-database',
  templateUrl: './movie-database.component.html',
  styleUrls: ['./movie-database.component.scss'],
})
export class MovieDatabaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
