export interface IProductsResponse {
	items: IProduct[];
	quantity: 9;
}

export interface IProduct {
	_id: string;
	name: string;
	description?: string;
	price: number;
	status: number;
	feedbacksCount: number;
	images: IProductImage[];
	rating?: number | null;
	feedbacks?: IFeedback;
	subCategory?: string;
}

export interface IFeedback {
	rate: number;
	advantages: string;
	limitations: string;
	description: string;
}

export interface IProductImage {
	url: string;
	source: string;
}

export const products: IProduct[] = [
	{
		_id: 'plenka-lamirel-la-78657',
		feedbacksCount: 3,
		subCategory: 'orgtexnika-i-ofisnoe-oborudovanie',
		images: [
			{
				url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/400/480/e3ff654f363054d49c85117ffd485e7d/81fc2f0bf9f2338c7fee84a8a8affb6a11cf8c15179d5e932235dbf0630c4b48.jpg',
				source: '81fc2f0bf9f2338c7fee84a8a8affb6a11cf8c15179d5e932235dbf0630c4b48.jpg',
			},
		],
		name: 'Пленка Lamirel LA-78657',
		price: 5,
		rating: 5,
		status: 1,
	},
	{
		_id: '156-displej-dla-noutbukov-s-ekranom-n156bge-l31',
		feedbacksCount: 3,
		subCategory: 'kompyutery-noutbuki-i-po',
		images: [
			{
				url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/fa694c141644e8b3b811ee60dbf4f97c/b003e4c3e5c3103c908b9c0f30bf7b8ab280135102c9978131c3f1cf5892a8d5.jpg',
				source: 'b003e4c3e5c3103c908b9c0f30bf7b8ab280135102c9978131c3f1cf5892a8d5.jpg',
			},
			{
				url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/5914102d987c017b2f45f633928a3ec6/7b18670c3b04a0d0d8bde56cef1c774955d529a3a3684536427f76e0eeba58bf.jpg',
				source: '7b18670c3b04a0d0d8bde56cef1c774955d529a3a3684536427f76e0eeba58bf.jpg',
			},
		],
		name: '15.6" Дисплей для ноутбуков с экраном N156BGE-L31',
		price: 8,
		rating: 4.333333333333333,
		status: 1,
	},
	{
		_id: 'binokl-pentax-sp-20x60-wp',
		feedbacksCount: 3,
		subCategory: 'fototexnika',
		images: [
			{
				url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/190b6bb4f6da41356b6b562af7d92652/e6b03b29ebd3eb7c6762689b96cbfca69c748307e36c2feac2c24f1d0516ae76.jpg',
				source: 'e6b03b29ebd3eb7c6762689b96cbfca69c748307e36c2feac2c24f1d0516ae76.jpg',
			},
			{
				url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/3b916df94ade0f197e2752548a8a9876/eb52ccfc40c76724679fa13002f3921bf1a976bdee1516a448e371fb750c72b7.jpg',
				source: 'eb52ccfc40c76724679fa13002f3921bf1a976bdee1516a448e371fb750c72b7.jpg',
			},
			{
				url: 'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/79ce959de44c944c092330619eb31be4/c84e77159676df2f33607fd35f6b1f95609005f19dcf5790be3b8cf7f2dc3d4e.jpg',
				source: 'c84e77159676df2f33607fd35f6b1f95609005f19dcf5790be3b8cf7f2dc3d4e.jpg',
			},
			{
				url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/e2c90c6f5abae9c575fc566a6a746d1c/492dcfff6c6b24414daf386b3f71ad42b4d3e70f8ea85a605d1970c80fe2c185.jpg',
				source: '492dcfff6c6b24414daf386b3f71ad42b4d3e70f8ea85a605d1970c80fe2c185.jpg',
			},
			{
				url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/6be9804b0b6b44dcf18e8b948eadd29d/d808844951507de57c9a2d234cf41346f2ace6503b90b0ecf18dd75507f1df5e.jpg',
				source: 'd808844951507de57c9a2d234cf41346f2ace6503b90b0ecf18dd75507f1df5e.jpg',
			},
			{
				url: 'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/1600dd509953733aabb558cecb41d129/0355e579687d6060d804b1daad8d445ff67b72c442547a7d8d4c5201a7e2173e.jpg',
				source: '0355e579687d6060d804b1daad8d445ff67b72c442547a7d8d4c5201a7e2173e.jpg',
			},
		],
		name: 'Бинокль Pentax SP 20x60 WP',
		price: 439,
		rating: 3.3333333333333335,
		status: 1,
	},
];
