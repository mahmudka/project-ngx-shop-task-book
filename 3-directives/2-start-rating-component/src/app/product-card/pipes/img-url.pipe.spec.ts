import { ImgUrlPipe } from './img-url.pipe';
import { oneProduct } from '../../../../../../shared/mocks/3-directives/product';


describe('[Moдуль 2] image url pipe', () => {
  let imgUrlPipe: ImgUrlPipe;
  beforeEach(() => {
    imgUrlPipe = new ImgUrlPipe();
  });
  it('Eсли значение к которому применяется pipe не является массивом трансформация должна возвращать пустую строку', () => {
    expect(imgUrlPipe.transform({} as any)).toEqual('');
  });
  it('Eсли значение к которому применяется pipe является массивом, но первый элемент массива не обьект с свойством url трансформация должна возвращать пустую строку', () => {
    expect(imgUrlPipe.transform([] as any)).toEqual('');
  });
  it('Eсли значение к которому применяется pipe является массивом и первый элемент обьект со свойством url трансформация должна возвращать это значение', () => {
    expect(imgUrlPipe.transform(oneProduct.images)).toEqual(oneProduct.images[0].url);
  });
});
