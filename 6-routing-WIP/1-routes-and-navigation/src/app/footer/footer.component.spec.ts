import { FooterComponent } from './footer.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Moдуль 6 - Футтер компонент]', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Компонент должен иметь свойство author cо значением Angular Course', () => {
    expect((component as any)?.author).toEqual('Angular Course');
  });
  it('Компонент должен иметь свойство currentYear cо значением текущего года', () => {
    expect((component as any)?.currentYear).toEqual(new Date().getFullYear());
  });
  it('тег с селектором .footer-title должен интерполировать свойства author и currentYear', () => {
    const { currentYear, author } = component as any;
    const titleEl = fixture.debugElement.query(By.css('.footer-title'));
    const titleValue = titleEl.nativeElement.textContent.trim();
    expect(titleValue).toEqual(`© ${currentYear}, ${author}`);
  });
});
