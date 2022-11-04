export interface ItemDetails {
  name: string;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
}

export interface CartItemDetails extends ItemDetails {
  image: string;
  quantity: number;
}

export interface ProductItemDetails extends ItemDetails {
  key?: string;
  company: string;
  description: string;
}
