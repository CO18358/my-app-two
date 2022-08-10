import { TestBed } from '@angular/core/testing';

import { AnimeQuotesService } from './anime-quotes.service';

describe('AnimeQuotesService', () => {
  let service: AnimeQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
