import { DescriptionComponent } from './description/description.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FeedbacksComponent } from './description/feedbacks/feedbacks.component';
import { InformationComponent } from './information/information.component';
import { ProductPageRoutingModule } from './one-product-page-routing.module';
import { ProductPageComponent } from './one-product-page.component';
import { StarRatingComponent } from '../../shared/components/star-rating/star-rating.component';
import { ReviewPipe } from '../../shared/pipes/review.pipe';
import { RatePipe } from '../../shared/pipes/rate.pipe';

@NgModule({
  declarations: [
    ProductPageComponent,
    InformationComponent,
    DescriptionComponent,
    FeedbacksComponent,
    ReviewPipe,
    StarRatingComponent,
    RatePipe,
  ],
  imports: [ProductPageRoutingModule, CommonModule, HttpClientModule],
})
export class ProductPageModule {}
