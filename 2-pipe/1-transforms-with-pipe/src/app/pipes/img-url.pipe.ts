import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from '../../../../../shared/mocks/2-pipes/product';

@Pipe({
	name: 'imgUrl',
})
// @ts-ignore
export class ImgUrlPipe implements PipeTransform {
	public transform(_images: IProductImage[] | undefined): string {
		if (!Array.isArray(_images)) {
			return '';
		}

		const [firstImg] = _images; // берем первый элемент и присваеваем его в переменную currentImg

		if (!firstImg) {
			return '';
		}

		return `${firstImg?.url}`;
	}
}
