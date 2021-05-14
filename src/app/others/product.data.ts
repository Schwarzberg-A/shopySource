import { Product } from "./product.types";

export const product: Product = {
  id: 1,
  company: 'Google',
  title: 'Smartphone Google Pixel 4 XL 6/128GB',
  image: 'https://www.e-katalog.ru/jpg_zoom1/1659450.jpg',
  category: 'smartphone',
  rating: {
    value: 5,
    reviews: 4
  },
  price: {
    value: 63000,
    discount: 0.17
  },
  deliveryOptions: {
    delivery: '21.07',
    postomate: true,
    avialable: 1
  },
  bage: {
    color: '#198038',
    text: 'выбор покупателей'
  },
  colors: {
    one: {
      color: 'black',
      image: 'https://www.e-katalog.ru/jpg_zoom1/1659450.jpg'
    }
  }
}

export const products: Array<Product> = [
  {
    id: 1,
    company: 'Google',
    title: 'Smartphone Google Pixel 4 XL 6/128GB',
    image: 'https://www.e-katalog.ru/jpg_zoom1/1659450.jpg',
    category: 'smartphone',
    rating: {
      value: 5,
      reviews: 4
    },
    price: {
      value: 63000,
      discount: 0.17
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: true,
      avialable: 1
    },
    bage: {
      color: '#198038',
      text: 'выбор покупателей'
    },
    colors: {
      one: {
        color: 'black',
        image: 'https://www.e-katalog.ru/jpg_zoom1/1659450.jpg'
      }
    }
  },
  {
    id: 2,
    company: 'Apple',
    title: 'Apple iPhone 12 128GB',
    image: 'https://nn.shop.megafon.ru/images/goods/1359/135925_p_20.png',
    category: 'smartphone',
    rating: {
      value: 4,
      reviews: 51
    },
    price: {
      value: 120000,
      discount: 0.05
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: true,
      avialable: 4
    },
    bage: {
      color: 'pink',
      text: 'выбор продавцов'
    },
    colors: {
      one: {
        color: 'white',
        image: 'https://nn.shop.megafon.ru/images/goods/1359/135925_p_20.png'
      },
      two: {
        color: 'black',
        image: 'https://nn.shop.megafon.ru/images/goods/1359/135929_p_20.png'
      }
    }
  },
  {
    id: 3,
    company: 'Samsung',
    title: 'Smartphone Samsung Galaxy S21 5G 8/256GB',
    image: 'https://avatars.mds.yandex.net/get-mpic/4401552/img_id6431146225573164350.jpeg/orig',
    category: 'smartphone',
    rating: {
      value: 3,
      reviews: 7
    },
    price: {
      value: 25000,
      discount: 0
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: false,
      avialable: 0
    },
    bage: {
      color: 'gray',
      text: 'лучший выбор'
    },
    colors: {
      one: {
        color: 'silver',
        image: 'https://avatars.mds.yandex.net/get-mpic/4401552/img_id6431146225573164350.jpeg/orig'
      },
      two: {
        color: 'pink',
        image: 'https://avatars.mds.yandex.net/get-mpic/4484220/img_id1905100450954863753.jpeg/orig'
      }
    }
  },
  {
    id: 4,
    company: 'Xiaomi',
    title: 'Смартфон Xiaomi Redmi 9 4/64GB (NFC)',
    image: 'https://avatars.mds.yandex.net/get-mpic/4303439/img_id1412210206604099330.jpeg/orig',
    category: 'smartphone',
    rating: {
      value: 3,
      reviews: 4
    },
    price: {
      value: 11490,
      discount: 0.22
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: true,
      avialable: 5
    },
    bage: {
      color: 'green',
      text: 'лучший выбор'
    },
    colors: {
      one: {
        color: 'green',
        image: 'https://avatars.mds.yandex.net/get-mpic/4303439/img_id1412210206604099330.jpeg/orig'
      },
      two: {
        color: 'gray',
        image: 'https://avatars.mds.yandex.net/get-mpic/1578067/img_id7214793623429903071.jpeg/orig'
      }
    }
  },
  {
    id: 5,
    company: 'Samsung',
    title: 'Смартфон Samsung Galaxy A01 Core 16GB',
    image: 'https://avatars.mds.yandex.net/get-mpic/1582909/img_id4134962279059515553.jpeg/orig',
    category: 'smartphone',
    rating: {
      value: 4,
      reviews: 17
    },
    price: {
      value: 5690,
      discount: 0
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: true,
      avialable: 19
    },
    bage: {
      color: 'black',
      text: 'лучший выбор'
    },
    colors: {
      one: {
        color: 'black',
        image: 'https://avatars.mds.yandex.net/get-mpic/1582909/img_id4134962279059515553.jpeg/orig'
      },
      two: {
        color: 'blue',
        image: 'https://avatars.mds.yandex.net/get-mpic/1862611/img_id648555354929761894.jpeg/orig'
      },
      three: {
        color: 'red',
        image: 'https://avatars.mds.yandex.net/get-mpic/4365206/img_id5359559609471640901.jpeg/orig'
      }
    }
  },
  {
    id: 6,
    company: 'Xiaomi',
    title: 'Смартфон Xiaomi Redmi 9 4/64GB',
    image: 'https://avatars.mds.yandex.net/get-mpic/1859495/img_id8123144843969302157.jpeg/orig',
    category: 'smartphone',
    rating: {
      value: 5,
      reviews: 42
    },
    price: {
      value: 10760,
      discount: 0.1
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: true,
      avialable: 25
    },
    bage: {
      color: 'gray',
      text: 'лучший выбор'
    },
    colors: {
      one: {
        color: 'gray',
        image: 'https://avatars.mds.yandex.net/get-mpic/1859495/img_id8123144843969302157.jpeg/orig'
      }
    }
  },
  {
    id: 7,
    company: 'Apple',
    title: 'Смартфон Apple iPhone 11 64GB',
    image: 'https://avatars.mds.yandex.net/get-mpic/1537623/img_id5937534275212229203.jpeg/orig',
    category: 'smartphone',
    rating: {
      value: 3,
      reviews: 42
    },
    price: {
      value: 48990,
      discount: 0
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: true,
      avialable: 0
    },
    bage: {
      color: 'gray',
      text: 'лучший выбор'
    },
    colors: {
      one: {
        color: 'yellow',
        image: 'https://avatars.mds.yandex.net/get-mpic/1537623/img_id5937534275212229203.jpeg/orig'
      },
      two: {
        color: 'white',
        image: 'https://avatars.mds.yandex.net/get-mpic/1925356/img_id4763530847532313542.jpeg/orig'
      }
    }
  },
  {
    id: 8,
    company: 'Xiaomi',
    title: 'Смартфон Xiaomi Mi 10T Pro 8/128GB',
    image: 'https://avatars.mds.yandex.net/get-marketpic/1705242/market_nDWBQCLSRUvJjVW2nwCtTQ/orig',
    category: 'smartphone',
    rating: {
      value: 4,
      reviews: 30
    },
    price: {
      value: 37430,
      discount: 0
    },
    deliveryOptions: {
      delivery: '21.07',
      postomate: false,
      avialable: 0
    },
    bage: {
      color: 'silver',
      text: 'лучший выбор'
    },
    colors: {
      one: {
        color: 'silver',
        image: 'https://avatars.mds.yandex.net/get-marketpic/1705242/market_nDWBQCLSRUvJjVW2nwCtTQ/orig'
      }
    }
  }
]