import { RatePipe } from './rate.pipe';

describe('[Moдуль 2 Rate pipe]', () => {
  let ratePipe: RatePipe;
  beforeEach(() => {
    ratePipe = new RatePipe();
  });
  it('Если дробная часть значение к которому применяется pipe < 0.25 значение должно округляться до целого числа вниз ', () => {
    expect(ratePipe.transform(1.11)).toEqual(1);
    expect(ratePipe.transform(1.24)).toEqual(1);
  });
  it('Если дробная часть значение к которому применяется pipe >= 0.25 и <0.75 то дробная часть должна окргуляться до .5 ', () => {
    expect(ratePipe.transform(1.25)).toEqual(1.5);
    expect(ratePipe.transform(1.74)).toEqual(1.5);
    expect(ratePipe.transform(1.4)).toEqual(1.5);
  });
  it('Если дробная часть значение к которому применяется pipe >= 0.75 то значение должно округляться до целого числа вверх ', () => {
    expect(ratePipe.transform(1.25)).toEqual(1.5);
    expect(ratePipe.transform(1.74)).toEqual(1.5);
    expect(ratePipe.transform(1.4)).toEqual(1.5);
  });
});
