import { Injectable } from '@angular/core';

import * as CTY from 'country-data-list';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  constructor() {}

  countriesList() {
    const data = CTY.countries.all;
    const list: string[] = data.map((element: any) => {
      return element.name;
    });
    // console.log(list);
    return list;
  }

  lookup(country: string) {
    return CTY.lookup.countries({ name: country })[0];
  }
}
