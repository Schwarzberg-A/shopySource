export interface Product {
  id?: number;
  company?: string;
  title?: string;
  category?: string;
  image?: string;
  rating?: ProductRating;
  price?: ProductPrice;
  deliveryOptions?: ProductDeliveryOptions;
  bage?: ProductBage;
  colors?: {
    one?: ProductColors
    two?: ProductColors
    three?: ProductColors
    four?: ProductColors
  };
}

export interface ProductPrice {
  value?: number;
  discount?: number;
}

export interface ProductRating {
  value?: number;
  reviews?: number;
}

export interface ProductDeliveryOptions {
  delivery?: string;
  postomate?: boolean;
  avialable?: number;
}

export interface ProductBage {
  color?: string;
  text?: string;
}

export interface ProductColors {
  color?: string;
  image?: string;
}
