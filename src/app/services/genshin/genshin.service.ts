import { Injectable } from '@angular/core';
import * as genshindb from 'genshin-db';
@Injectable({
  providedIn: 'root',
})
export class GenshinService {
  constructor() {}

  allCharacters() {
    return genshindb.characters('names', { matchCategories: true });
  }

  filterCharacters(query: string) {
    return genshindb.characters(query, {
      matchCategories: true,
    });
  }
  getCharacter(name: string) {
    return genshindb.characters(name);
  }
  getCharacterStats(name: string, level: number, ascension: boolean = false) {
    const ascended = ascension ? '+' : '-';
    return genshindb.characters(name)?.stats(level);
  }
}
