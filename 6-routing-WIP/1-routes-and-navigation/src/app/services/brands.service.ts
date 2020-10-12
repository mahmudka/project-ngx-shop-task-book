import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class BrandsService {
  constructor(private http: HttpClient) {}

  public getBrands({
    prices,
    id,
  }: {
    prices: number[];
    id: string;
  }): Observable<Object> {
    const priceRange = prices.length > 0 ? prices : [0, 2000];
    return this.http.get(
      `api/brands?subCat=${id}&prices=${priceRange[0]},${priceRange[1]}`
    );
  }
}
