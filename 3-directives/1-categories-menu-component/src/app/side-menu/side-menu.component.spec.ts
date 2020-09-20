import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { SideMenuComponent } from './side-menu.component';
import { categories } from '../../../../../shared/mocks/3-directives/categories';

describe('[Moдуль 3 Компонент cписок кактегорий и подкатегорий]', () => {
  let fixture: ComponentFixture<SideMenuComponent>;
  let component: SideMenuComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideMenuComponent],
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
  it('компонент должен иметь свойство categories c значением null', () => {
    expect((component as any).currentName).toBeDefined();
    expect((component as any).currentName).toEqual(null);
  });


  it('компонент должен иметь метод hover которе принимает аргументом имя подкатегории и устанавливает это значение свойству currentName',
    () => {
      expect((component as any).hover).toBeDefined();
      const testName = 'testName';
      (component as any).hover(testName);
      fixture.detectChanges();
      expect((component as any).currentName).toEqual(testName);
    });
  it('компонент должен иметь метод mouseLeave устанавливает  currentName в null',
    () => {
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
    const subCatCount = (component as any).categories.reduce((acc, catgory) => {
      return acc += catgory.subCategories.length;
    }, 0);
    expect(listElements.length).toEqual(subCatCount);
  });

  it('при нажатии на блок с селектором .dropdown-item должен вызываться метод  redirectTo и срабатывать собстевнное событие goToProduct',
    () => {
      spyOn(component as any, 'redirectTo').and.callThrough();
      spyOn((component as any)?.categoryChange, 'emit').and.callThrough();
      (component as any).categories = categories;
      fixture.detectChanges();
      const [subCategoryItem] = fixture.debugElement.queryAll(By.css('.dropdown-item a'));
      subCategoryItem.triggerEventHandler('click', null);
      expect((component as any)?.redirectTo).toHaveBeenCalledTimes(1);
      expect((component as any)?.categoryChange.emit).toHaveBeenCalledTimes(1);
    });

  // TODO - should write more tests
});
