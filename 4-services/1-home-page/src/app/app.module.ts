import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { SideMenuComponent } from './home-page/side-menu/side-menu.component';
import { ProductCardComponent } from './home-page/product-card/product-card.component';
import { ProductsService } from './services/products/products.service';
import { BASE_URL_TOKEN } from './services/interceptor/config';
import { environment } from '../environments/environment';
import { CategoriesService } from './services/categories/category.service';

@NgModule({
	declarations: [
		AppComponent,
		HomePageComponent,
		HeaderComponent,
		FooterComponent,
		SideMenuComponent,
		ProductCardComponent,
	],
	imports: [BrowserModule, HttpClientModule],
	providers: [
		ProductsService,
		CategoriesService,
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
