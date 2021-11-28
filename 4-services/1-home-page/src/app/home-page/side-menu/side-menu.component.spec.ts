import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, DebugElement, EventEmitter } from '@angular/core';
import {
	categories,
	ISubCategory,
	ICategory,
} from '../../../../../../shared/mocks/4-services/categories';
import { SideMenuComponent } from './side-menu.component';

describe('[Moдуль 4 - Компонент cписок кактегорий и подкатегорий]', () => {
	let fixture: ComponentFixture<SideMenuComponent>;
	let component: SideMenuComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SideMenuComponent],
		}).overrideComponent(SideMenuComponent, {
			set: { changeDetection: ChangeDetectionStrategy.Default },
		});
		fixture = TestBed.createComponent(SideMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь метод redirectTo ', () => {
		expect((component as any).redirectTo).toBeTruthy();
	});

	it('компонент должен иметь собственное событие categoryChange ', () => {
		expect((component as any).categoryChange).toBeDefined();
		expect((component as any).categoryChange).toBeInstanceOf(EventEmitter);
	});

	it('компонент должен иметь свойство categories c значением []', () => {
		expect((component as any).categories).toBeDefined();
		expect((component as any).categories).toEqual([]);
	});
	it('компонент должен иметь свойство currentName c значением null', () => {
		expect((component as any).currentName).toBeDefined();
		expect((component as any).currentName).toEqual(null);
	});

	it('компонент должен иметь метод hover которе принимает аргументом имя подкатегории и устанавливает это значение свойству currentName', () => {
		expect((component as any).hover).toBeDefined();
		const testName = 'testName';
		(component as any).hover(testName);
		fixture.detectChanges();
		expect((component as any).currentName).toEqual(testName);
	});
	it('компонент должен иметь метод mouseLeave устанавливает  currentName в null', () => {
		expect((component as any).mouseLeave).toBeDefined();
		(component as any).currentName = 'testName';
		(component as any).mouseLeave();
		fixture.detectChanges();
		expect((component as any).currentName).toEqual(null);
	});

	it('Должен правильно формироваться список для категорий', () => {
		(component as any).categories = categories;
		fixture.detectChanges();
		const listElements = fixture.debugElement.queryAll(By.css('.list-group.sidebar > li'));
		expect(listElements).toBeTruthy();
		expect(listElements.length).toEqual(categories.length);
	});

	it('Должен правильно формироваться список для под категорий', () => {
		(component as any).categories = categories;
		fixture.detectChanges();
		const listElements = fixture.debugElement.queryAll(By.css('li.dropdown-item '));
		expect(listElements).toBeTruthy();
		const subCatCount = (component as any).categories.reduce((acc: number, category: ICategory) => {
			const count: number = acc + category.subCategories.length;
			return count;
		}, 0);
		expect(listElements.length).toEqual(subCatCount);
	});

	it('при нажатии на блок с селектором .dropdown-item должен вызываться метод  redirectTo и срабатывать собственное событие goToProduct', () => {
		spyOn(component as any, 'redirectTo').and.callThrough();
		spyOn((component as any)?.categoryChange, 'emit').and.callThrough();
		(component as any).categories = categories;
		fixture.detectChanges();
		const [subCategoryItem] = fixture.debugElement.queryAll(By.css('.dropdown-item a'));
		subCategoryItem!.triggerEventHandler('click', null);
		expect((component as any)?.redirectTo).toHaveBeenCalledTimes(1);
		expect((component as any)?.categoryChange.emit).toHaveBeenCalledTimes(1);
	});

	it('тег с селектором .dropdown-toggle  должен правильно интерполировать свойство name категории', () => {
		(component as any).categories = categories;
		fixture.detectChanges();
		const categoryList: DebugElement[] = fixture.debugElement.queryAll(By.css('.dropdown-toggle'));
		expect(categoryList).toBeTruthy();
		(component as any).categories.forEach((category: ICategory, index: number) => {
			expect(categoryList[index]!.nativeElement.textContent.trim()).toEqual(category.name);
		});
	});

	it('тег с селектором .sub-category должен правильно интерполировать свойство name подкатегории', () => {
		(component as any).categories = categories;
		fixture.detectChanges();
		const subCategoriesElem: DebugElement[] = fixture.debugElement.queryAll(
			By.css('.sub-category'),
		);
		expect(subCategoriesElem).toBeTruthy();

		const nameList: string[] = [];
		(component as any).categories.forEach((category: ICategory) => {
			category.subCategories.forEach((subCategory: ISubCategory) => {
				nameList.push(subCategory.name);
			});
		});
		subCategoriesElem.forEach((el: DebugElement, index: number) => {
			expect(el.nativeElement.textContent.trim()).toEqual(nameList[index]);
		});
	});
});
