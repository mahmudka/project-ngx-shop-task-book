import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BASE_URL_TOKEN } from './services/config';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/category.service';
import { InterceptorService } from './services/interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { BrandsService } from './services/brands.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    ProductsService,
    CategoriesService,
    BrandsService,

    {
      provide: BASE_URL_TOKEN,
      useValue: environment.baseUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
