export interface ItemDetails {
  image?: string;
  name: string;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
}

export interface CartItemDetails extends ItemDetails {
  quantity: number;
}

export interface ProductItemDetails extends ItemDetails {
  key?: string;
  company: string;
  description: string;
}
