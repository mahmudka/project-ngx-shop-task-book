import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './home-page/footer/footer.component';
import { HeaderComponent } from './home-page/header/header.component';
import { SideMenuComponent } from './home-page/side-menu/side-menu.component';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/category.service';
import { ProductCardComponent } from './home-page/product-card/product-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BASE_URL_TOKEN } from './services/interceptor/config';
import { environment } from '../environments/environment';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

describe('[Moдуль 4 - Компонент домашней страницы app]', () => {
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				HomePageComponent,
				FooterComponent,
				HeaderComponent,
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
		}).overrideComponent(AppComponent, {
			set: { changeDetection: ChangeDetectionStrategy.Default },
		});
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь свойство products$ и быть типа Observable', () => {
		expect(component.products$).toBeDefined();
		expect(component.products$).toBeInstanceOf(Observable);
	});
	it('компонент должен иметь свойство categories  и быть типа  Observable ', () => {
		expect(component.categories$).toBeDefined();
		expect(component.categories$).toBeInstanceOf(Observable);
	});
});
