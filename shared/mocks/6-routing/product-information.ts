export interface IProduct {
  _id: string;
  subCategory: string;
  feedbacksCount: number;
  count?: number;
  name: string;
  description: string;
  feedbacks?: IFeedback[];
  characteristics?: ICharacteristics[];
  price: number;
  status: number;
  images: IProductImage[];
  rating: number;
  brand?: string;
}
export interface IProductsState {
  items: IProduct[];
  loading: boolean;
  prices: IMinMaxPrice;
}

export interface IProductApi {
  items: IProduct[];
  prices: IMinMaxPrice;
}
export interface IMinMaxPrice {
  min: number;
  max: number;
}
export interface IFeedback {
  _id: string;
  rate?: number;
  product?: string;
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
  isExtended?: boolean;
}

interface ICharacteristic {
  name: string;
  value: string;
  isExtended?: boolean;
}

export interface IProductImage {
  url: string;
  source: string;
}

export const oneProduct: IProduct = {
  _id: 'korpus-deepcool-matrexx-55-add-rgb-wh--belyj',
  description:
    'Deepcool MATREXX 55 ADD-RGB WH - корпус в формфакторе Midi-Tower, белого цвета, позволяющий использовать материнские платы типоразмера E-ATX, ATX, Micro ATX или Mini-ITX. Корпус имеет возможность установки двух 3.5" накопителей (лотки имеют возможность установки и 2.5" дисков), а также до четырех 2.5" устройств хранения данных. Максимальная высота системы воздушного охлаждения процессора может достигать 168 мм, а максимальная длина плат расширения 370 мм. Имеется поддержка стандартных ATX блоков питания.',
  feedbacks: [
    {
      _id: '5f4f41e24c48fd2a6d443991',
      product: 'korpus-deepcool-matrexx-55-add-rgb-wh--belyj',
      advantages: 'Самый лучший товар в этой категории, всем горячо рекомендую',
      rate: 5,
    },
    {
      _id: '5f4f41e24c48fd2a6d443991',
      product: 'korpus-deepcool-matrexx-55-add-rgb-wh--belyj',
      advantages: 'Самый лучший товар в этой категории',
      rate: 3,
    },
  ],
  feedbacksCount: 2,
  images: [
    {
      url:
        'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/455e2ef2c9836142abd22e435dc72a9e/e81f82fc6a35cf977b21e94dc8554b2be2977d6a3c238f1789c3b1a58dcb93b0.jpg',
      source:
        'e81f82fc6a35cf977b21e94dc8554b2be2977d6a3c238f1789c3b1a58dcb93b0.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/b9dbddbf8229b8c07851788587b810d5/f4ed9bcc9382774ac2f167f19fde7b88822f4b52dd574a91795c526b002ce945.jpg',
      source:
        'f4ed9bcc9382774ac2f167f19fde7b88822f4b52dd574a91795c526b002ce945.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/10adb7c26f6ba269511c2ec3440aa8e1/3ddfb1ba48e83db0a5c93b257188a26ff4331317e403b8148f9650c3a0d8a29b.jpg',
      source:
        '3ddfb1ba48e83db0a5c93b257188a26ff4331317e403b8148f9650c3a0d8a29b.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/4ec00b6f6e74c459c7f2dd02a5f1d340/b371b1d0b7dcf02bc5d6eaa5d576fcc3a5df3602e83bc2860034c2402dbe2a6e.jpg',
      source:
        'b371b1d0b7dcf02bc5d6eaa5d576fcc3a5df3602e83bc2860034c2402dbe2a6e.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/eb5f7fcae8427ada1530d1f4aed5b3b8/e6759269896f2ec69624d3d896215693169de0ee020fd959a12763ae545f00b2.jpg',
      source:
        'e6759269896f2ec69624d3d896215693169de0ee020fd959a12763ae545f00b2.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/4b0d87352f17918e95efd3e615d9dcf9/108939775c6e9ea5da6707c04d7100fb22286badb49f068e79006d5db26a6371.jpg',
      source:
        '108939775c6e9ea5da6707c04d7100fb22286badb49f068e79006d5db26a6371.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/688d26eb706da279dd4b40dc9b9217bb/14b3f7037e4e1d1d1b6fe2157944fbcc3a823dd99fa9df479398805adfdd265d.jpg',
      source:
        '14b3f7037e4e1d1d1b6fe2157944fbcc3a823dd99fa9df479398805adfdd265d.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st4/fit/wm/2000/2000/cf90269b51b4637f2942e272913e206f/6022334a30586fc9d527bfecc97c33edd5fa433f43f93a1bd899f9a98cad71da.jpg',
      source:
        '6022334a30586fc9d527bfecc97c33edd5fa433f43f93a1bd899f9a98cad71da.jpg',
    },
    {
      url:
        'https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/8b8362246a59e3cc73ebd201447c6c58/35e7bbf032ea63b8010c66eb4f491596358598a5873cb4c4868b969d81ac6554.jpg',
      source:
        '35e7bbf032ea63b8010c66eb4f491596358598a5873cb4c4868b969d81ac6554.jpg',
    },
  ],
  name: 'Корпус DEEPCOOL MATREXX 55 ADD-RGB WH  белый',
  price: 71,
  rating: 4,
  status: 1,
  subCategory: 'komplektuyushhie-dlya-pk',
  characteristics: [
    {
      title: 'Общие параметры',
      items: [
        {
          name: 'Модель',
          value: 'DEEPCOOL MATREXX 55 ADD-RGB WH',
          isExtended: true,
        },
        {
          name: 'Основной цвет',
          value: 'белый',
          isExtended: true,
        },
        {
          name: 'Дополнительные цвета',
          value: 'черный',
          isExtended: true,
        },
        {
          name: 'Год релиза',
          value: '2019',
          isExtended: true,
        },
      ],
      isExtended: true,
    },
    {
      title: 'Форм-фактор и габариты',
      items: [
        {
          name: 'Форм-фактор совместимых плат',
          value: 'Micro-ATX, Mini-ITX, Standard-ATX, E-ATX',
        },
        {
          name: 'Типоразмер корпуса',
          value: 'Mid-Tower',
        },
        {
          name: 'Корпус для HTPC',
          value: 'нет',
          isExtended: true,
        },
      ],
    },
    {
      title: 'Блок питания',
      items: [
        {
          name: 'Встроенный БП',
          value: 'нет',
        },
        {
          name: 'Размещение блока питания',
          value: 'нижнее',
          isExtended: true,
        },
        {
          name: 'Форм-фактор совместимых блоков питания',
          value: 'ATX',
          isExtended: true,
        },
      ],
    },
    {
      title: 'Конструкция',
      items: [
        {
          name: 'Док-станция для HDD/SSD',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Материал корпуса',
          value: 'сталь, стекло, пластик',
          isExtended: true,
        },
        {
          name: 'Толщина металла',
          value: '0.6 мм',
          isExtended: true,
        },
        {
          name: 'Положение корзин накопителей',
          value: 'вертикально, поперек корпуса',
          isExtended: true,
        },
        {
          name: 'Отсеки для 2.5" накопителей',
          value: 'есть',
          isExtended: true,
        },
        {
          name: 'Количество отсеков 2.5" накопителей',
          value: '4 шт',
          isExtended: true,
        },
        {
          name: 'Число внутренних отсеков 3.5"',
          value: '2 шт',
        },
        {
          name: 'Число внешних отсеков 3.5"',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Число отсеков 5.25"',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Количество слотов расширения',
          value: '7',
          isExtended: true,
        },
        {
          name: 'Максимальная длина устанавливаемой видеокарты, мм',
          value: '370 мм',
        },
        {
          name: 'Максимальная высота процессорного кулера, мм',
          value: '168 мм',
          isExtended: true,
        },
        {
          name: 'Малошумные и антивибрационные корпуса',
          value: 'нет',
          isExtended: true,
        },
      ],
    },
    {
      title: 'Охлаждение',
      items: [
        {
          name: 'Вентиляторы в комплекте',
          value: 'нет',
        },
        {
          name: 'Поддержка фронтальных вентиляторов',
          value: '3 x 120 мм или 3 x 140 мм',
          isExtended: true,
        },
        {
          name: 'Поддержка тыловых вентиляторов',
          value: '1 x 120 мм',
          isExtended: true,
        },
        {
          name: 'Поддержка верхних вентиляторов',
          value: '2 x 120 мм или 2 x 140 мм',
          isExtended: true,
        },
        {
          name: 'Поддержка нижних вентиляторов',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Поддержка боковых вентиляторов',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Возможность установки системы жидкостного охлаждения',
          value: 'есть',
          isExtended: true,
        },
        {
          name: 'Блок управления вентиляторами',
          value: 'нет',
          isExtended: true,
        },
      ],
    },
    {
      title: 'Разъемы и интерфейсы лицевой панели',
      items: [
        {
          name: 'Количество и тип USB портов',
          value: '2x USB 2.0, 1x USB 3.0',
          isExtended: true,
        },
        {
          name: 'Аудио разъемы',
          value: 'микрофонный вход (jack 3.5), выход на наушники (jack 3.5)',
          isExtended: true,
        },
        {
          name: 'Интерфейсы eSATA',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Встроенный кард-ридер',
          value: 'нет',
          isExtended: true,
        },
      ],
      isExtended: true,
    },
    {
      title: 'Удобство сборки',
      items: [
        {
          name: 'Безвинтовое крепление в отсеках 3,5"',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Безвинтовое крепление в отсеках 5,25"',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Безвинтовое крепление в слотах расширения',
          value: 'нет',
          isExtended: true,
        },
        {
          name: 'Прокладка кабелей за задней стенкой',
          value: 'есть',
          isExtended: true,
        },
        {
          name: 'Вырез в районе крепления кулера CPU',
          value: 'есть',
          isExtended: true,
        },
      ],
      isExtended: true,
    },
    {
      title: 'Моддинг',
      items: [
        {
          name: 'Наличие окна на боковой стенке',
          value: 'есть',
          isExtended: true,
        },
        {
          name: 'Материал окна',
          value: 'закаленное стекло',
          isExtended: true,
        },
        {
          name: 'Подсветка',
          value: 'многоцветная',
        },
        {
          name: 'Пылевой фильтр',
          value: 'есть',
          isExtended: true,
        },
      ],
    },
    {
      title: 'Дополнительная информация',
      items: [
        {
          name: 'Комплектация',
          value: 'набор крепежных винтов',
          isExtended: true,
        },
        {
          name: 'Возможность закрывать крышку на замок',
          value: 'нет',
          isExtended: true,
        },
      ],
      isExtended: true,
    },
    {
      title: 'Габариты, вес',
      items: [
        {
          name: 'Длина',
          value: '440 мм',
          isExtended: true,
        },
        {
          name: 'Ширина (мм)',
          value: '210 мм',
          isExtended: true,
        },
        {
          name: 'Высота',
          value: '480 мм',
          isExtended: true,
        },
        {
          name: 'Вес (кг)',
          value: '6.97 кг',
          isExtended: true,
        },
      ],
      isExtended: true,
    },
  ],
  brand: 'DEEPCOOL',
};
