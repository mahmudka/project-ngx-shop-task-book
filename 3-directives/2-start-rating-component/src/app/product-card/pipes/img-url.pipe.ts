import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from '../../../../../../shared/mocks/3-directives/product';

@Pipe({
  name: 'imgUrl',
})
// @ts-ignore
export class ImgUrlPipe implements PipeTransform {
  public transform(images: IProductImage[] | undefined): string {
    if (!Array.isArray(images)) {
      return '';
    }
    const [currentImg] = images;
    if (!currentImg) {
      return '';
    }

    return `${currentImg?.url || ''}`;
  }
}
