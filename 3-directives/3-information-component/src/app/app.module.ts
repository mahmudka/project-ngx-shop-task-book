import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformationComponent } from './information/information.component';
import { StarRatingComponent } from './information/star-rating/star-rating.component';
import { ReviewPipe } from './pipes/review.pipe';
import { RatePipe } from './pipes/rate.pipe';
@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    StarRatingComponent,
    RatePipe,
    ReviewPipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
