import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { ProductsService } from './services/products/products.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BASE_URL_TOKEN } from './services/interceptor/config';
import { environment } from './../environments/environment';
import { ProductComponent } from './one-product-page/one-product-page.component';
import { InformationComponent } from './one-product-page/information/information.component';
import { DescriptionComponent } from './one-product-page/description/description.component';
import { ReviewPipe } from './one-product-page/pipes/review.pipe';
import { RatePipe } from './one-product-page/pipes/rate.pipe';
import { FeedbacksComponent } from './one-product-page/description/feedbacks/feedbacks.component';
import { HeaderComponent } from './one-product-page/header/header.component';
import { FooterComponent } from './one-product-page/footer/footer.component';
import { StarRatingComponent } from './one-product-page/star-rating/star-rating.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InformationComponent,
    DescriptionComponent,
    StarRatingComponent,
    FeedbacksComponent,
    FooterComponent,
    HeaderComponent,
    RatePipe,
    ReviewPipe,
  ],

  imports: [BrowserModule, HttpClientModule],
  providers: [
    ProductsService,

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
