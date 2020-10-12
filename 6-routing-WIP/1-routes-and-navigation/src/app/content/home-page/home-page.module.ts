import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [HomePageComponent, ProductCardComponent, SideMenuComponent],
  imports: [HomePageRoutingModule, CommonModule, HttpClientModule],
})
export class HomePageModule {}
