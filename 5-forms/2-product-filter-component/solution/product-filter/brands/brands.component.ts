import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-shop-brands',
  templateUrl: './brands.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BrandsComponent,
      multi: true,
    },
  ],
  styleUrls: ['./brands.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsComponent implements ControlValueAccessor {
  @Input()
  public brands: string[] = [];
  @Input()
  public selectedBrands: string[] = [];
  public isShow = false;
  // tslint:disable-next-line: ban-types
  public onChange!: Function;
  public brandsToShow: string[] = [];

  public writeValue(brands: string[]): void {
    this.brandsToShow = brands;
  }

  // tslint:disable-next-line: ban-types
  public registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {}

  public check(brandName: string): void {
    const index = this.selectedBrands.findIndex(
      (brand): boolean => brand === brandName
    );
    if (index < 0) {
      this.selectedBrands.push(brandName);
    } else {
      this.selectedBrands.splice(index, 1);
    }
    this.onChange(this.selectedBrands);
  }

  public show(): void {
    this.isShow = !this.isShow;
  }

  public showBrand(index: number): boolean {
    if (this.isShow) {
      return true;
    }

    if (index <= 5) {
      return true;
    }

    return false;
  }
}
