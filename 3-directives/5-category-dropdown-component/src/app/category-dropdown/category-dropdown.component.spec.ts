import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';
import {
  ISubCategory,
  categories,
  ICategory,
} from '../../../../../shared/mocks/3-directives/categories';
import { CategoryDropdownComponent } from './category-dropdown.component';

describe('[Moдуль 3 Компонент выбора категории товара]', () => {
  let fixture: ComponentFixture<CategoryDropdownComponent>;
  let component: CategoryDropdownComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDropdownComponent],
    });
    fixture = TestBed.createComponent(CategoryDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь собственное событие subCategorySelect ', () => {
    expect((component as any).subCategorySelect).toBeDefined();
  });

  it('компонент должен иметь свойство categories c значением []', () => {
    expect((component as any).categories).toBeDefined();
    expect((component as any).categories).toEqual([]);
  });
  it('компонент должен иметь свойство currentIndex c значением null', () => {
    expect((component as any).currentIndex).toBeDefined();
    expect((component as any).currentIndex).toEqual(null);
  });
  it('компонент должен иметь свойство currentCategory c значением "" ', () => {
    expect((component as any).currentCategory).toBeDefined();
    expect((component as any).currentCategory).toEqual('');
  });
  it('компонент должен иметь cобственное событие subCategorySelectEvent ', () => {
    expect((component as any).subCategorySelectEvent).toBeTruthy();
    expect((component as any).subCategorySelectEvent).toBeInstanceOf(
      EventEmitter
    );
  });
  // tslint:disable-next-line: max-line-length
  it('компонент должен иметь метод showSubCategories которе принимает аргументом индекс подкатегории и устанавливает это значение свойству currentIndex', () => {
    expect((component as any).showSubCategories).toBeDefined();
    const currentIndex = 1;
    (component as any).showSubCategories(currentIndex);
    fixture.detectChanges();
    expect((component as any).currentIndex).toEqual(currentIndex);
  });

  it('Должен правильно формироваться список для категорий', () => {
    (component as any).categories = categories;
    fixture.detectChanges();
    const listElements = fixture.debugElement.queryAll(
      By.css('.category-name')
    );
    expect(listElements).toBeTruthy();
    expect(listElements.length).toEqual(categories.length);
  });

  it('Должен правильно формироваться список для под категорий', () => {
    (component as any).categories = categories;
    fixture.detectChanges();
    const listElements = fixture.debugElement.queryAll(
      By.css('.sub-category-name')
    );
    expect(listElements).toBeTruthy();
    const subCatCount = (component as any).categories.reduce(
      (acc, category) => {
        return (acc += category.subCategories.length);
      },
      0
    );
    expect(listElements.length).toEqual(subCatCount);
  });

  it('при нажатии на блок с селектором .sub-category должен вызываться метод  subCategorySelect и срабатывать собственное событие subCategorySelectEvent', () => {
    (component as any).categories = categories;
    fixture.detectChanges();
    expect((component as any).showSubCategories).toBeDefined();

    spyOn(component as any, 'subCategorySelect').and.callThrough();
    spyOn((component as any)?.subCategorySelectEvent, 'emit').and.callThrough();

    const [subCategoryItem] = fixture.debugElement.queryAll(
      By.css('.sub-category')
    );
    subCategoryItem.triggerEventHandler('click', null);
    expect((component as any)?.subCategorySelect).toHaveBeenCalledTimes(1);
    expect(
      (component as any)?.subCategorySelectEvent.emit
    ).toHaveBeenCalledTimes(1);
  });

  it('тег с селектором .category-name  должен правильно интерполировать свойство name категории', () => {
    (component as any).categories = categories;
    fixture.detectChanges();
    const categoryList: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.category-name')
    );
    expect(categoryList).toBeTruthy();
    (component as any).categories.forEach(
      (category: ICategory, index: number) => {
        expect(categoryList[index].nativeElement.textContent.trim()).toEqual(
          category.name
        );
      }
    );
  });

  it('тег с селектором .sub-category-name должен правильно интерполировать свойство name подкатегории', () => {
    (component as any).categories = categories;
    fixture.detectChanges();
    const subCategoriesElem: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.sub-category-name')
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
