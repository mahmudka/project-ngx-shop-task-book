import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { PriceInputsComponent } from './product-filter/price-slider/price-inputs/price-inputs.component';
import { PriceSliderComponent } from './product-filter/price-slider/price-slider.component';
import { BrandsComponent } from './product-filter/brands/brands.component';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
  declarations: [
    AppComponent,
    ProductFilterComponent,
    PriceSliderComponent,
    PriceInputsComponent,
    BrandsComponent,
  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
