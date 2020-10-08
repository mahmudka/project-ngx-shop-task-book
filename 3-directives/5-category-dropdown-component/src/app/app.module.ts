import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';

@NgModule({
  declarations: [AppComponent, CategoryDropdownComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
