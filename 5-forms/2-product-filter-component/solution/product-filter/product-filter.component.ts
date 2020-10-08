import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-shop-product-filter',
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent implements OnInit {
  public selectedPrices: number[] = [];
  @Output()
  public confirm: EventEmitter<FormData> = new EventEmitter<FormData>();
  @Input()
  brands: string[] = [];

  selectedBrands: string[] = [];

  public form: FormGroup = this._fb.group({
    brands: [[]],
    searchByName: [''],
    prices: [[0, 2000]],
  });

  constructor(private readonly _fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.confirm.emit(data);
    });
  }
}
