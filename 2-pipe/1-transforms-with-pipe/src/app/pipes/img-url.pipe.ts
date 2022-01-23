import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from '../../../../../shared/mocks/2-pipes/product';

@Pipe({
	name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
	public transform(_images: IProductImage[] | undefined): string {
		if (!Array.isArray(_images)) {
			return '';
		}
		if (_images[0]) {
			return _images[0].url;
		}
		return '';
	}
}
