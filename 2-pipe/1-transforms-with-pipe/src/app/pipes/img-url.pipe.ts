import { Pipe, PipeTransform } from '@angular/core';
import { IProductImage } from '../../../../../shared/mocks/2-pipes/product';

@Pipe({
	name: 'imgUrl',
})
// @ts-ignore
export class ImgUrlPipe implements PipeTransform {
	public transform(images: IProductImage[] | undefined): string {
		if (!Array.isArray(images)) {
			return '';
		}

		return images[0]?.url ?? '';
	}
}
