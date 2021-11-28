import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('[Moдуль 4 - Компонент домашней страницы]', () => {
	let fixture: ComponentFixture<HomePageComponent>;
	let component: HomePageComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HomePageComponent, FooterComponent, HeaderComponent, SideMenuComponent],
		}).overrideComponent(HomePageComponent, {
			set: { changeDetection: ChangeDetectionStrategy.Default },
		});
		fixture = TestBed.createComponent(HomePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь метод goToBasket ', () => {
		expect((component as any).goToBasket).toBeTruthy();
	});
	it('компонент должен иметь метод goToProduct ', () => {
		expect((component as any).goToProduct).toBeTruthy();
	});
	it('компонент должен иметь метод redirectTo ', () => {
		expect((component as any).redirectTo).toBeTruthy();
	});

	it('компонент должен иметь свойство products co значением null', () => {
		expect((component as any).products).toBeDefined(null);
	});
	it('компонент должен иметь свойство categories co значением null', () => {
		expect((component as any).categories).toBeDefined(null);
	});
});
