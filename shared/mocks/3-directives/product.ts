export interface IProduct {
  _id: string;
  subCategory: string;
  feedbacksCount: number;
  count?: number;
  name: string;
  description: string;
  feedbacks?: IFeedback;
  characteristics?: ICharacteristics[];
  price: number;
  status: boolean;
  images: IProductImage[];
  rating: number;
}

export interface IFeedback {
  rate?: number;
  advantages?: string;
  limitations?: string;
  description?: string;
}

export interface IProductImage {
  url: string;
  source: string;
}

interface ICharacteristics {
  title: string;
  items: ICharacteristic[];
}

interface ICharacteristic {
  name: string;
  value: string;
  isExtended: boolean;
}

export interface IProductImage {
  url: string;
  source: string;
}

export const oneProduct: IProduct = {
  _id: 'plastik-dla-3d-pecati-esun-pla175cl1',
  feedbacksCount: 3,
  description: 'some product',
  subCategory: 'orgtexnika-i-ofisnoe-oborudovanie',
  images: [
    {
      url:
        'https://c.dns-shop.ru/thumb/st4/fit/wm/1948/1948/72aeef534e9a538edf0b86b5f5e0e3b3/5e452c6bbe5eb1e519e3218ab67cef3f9a1b3e5842b4f346dc207929cc2be5a7.jpg',
      source:
        '5e452c6bbe5eb1e519e3218ab67cef3f9a1b3e5842b4f346dc207929cc2be5a7.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st1/fit/wm/1948/1948/3e7424180aeb4d5d3501d2509f53c441/bd2588db04c7fe82694fb8d9bb2fd97baf34e5e060d721e0401823e4ca39afd2.jpg',
      source:
        'bd2588db04c7fe82694fb8d9bb2fd97baf34e5e060d721e0401823e4ca39afd2.jpg',
    },
  ],
  name: 'Пластик для 3D печати ESUN PLA175CL1',
  price: 24,
  rating: 3.55,
  status: false,
  count: 2,
}
