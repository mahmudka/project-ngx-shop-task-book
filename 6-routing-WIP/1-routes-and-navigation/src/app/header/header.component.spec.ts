import { HeaderComponent } from '../header/header.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';

describe('[Moдуль 6 - Header компонент]', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('компонент должен иметь cвойство counter со значение 5', () => {
    expect((component as any).counter).toBeTruthy();
    expect((component as any).counter).toEqual(5);
  });

  it('компонент должен иметь метод redirectTo', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь cобственное событие goToBasket ', () => {
    expect((component as any).goToBasket).toBeTruthy();
    expect((component as any).goToBasket).toBeInstanceOf(EventEmitter);
  });

  it('при нажатии на кнопку с селектором .basket.basket_not-empty должен вызываться метод  redirectTo и срабатывать собстевнное событие goToBasket', () => {
    spyOn(component as any, 'redirectTo').and.callThrough();
    spyOn((component as any)?.goToBasket, 'emit').and.callThrough();
    const incrementButton = fixture.debugElement.query(
      By.css('.basket.basket_not-empty')
    );
    incrementButton.triggerEventHandler('click', null);
    expect((component as any)?.redirectTo).toHaveBeenCalledTimes(1);
    expect((component as any)?.goToBasket.emit).toHaveBeenCalledTimes(1);
  });

  it('тег с селектором product-counter должен правильно интерполировать значение ', () => {
    const counterEl = fixture.debugElement.query(By.css('.product-counter'));
    const counterValue = counterEl.nativeElement.textContent.trim();
    expect(counterValue).toBeTruthy();
    expect(counterValue.toString()).toEqual(
      (component as any)?.counter?.toString()
    );
  });
});
