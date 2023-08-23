export type Product = {
  name: string;
  category: string;
  description: string;
  price: number;
  images: string[];
  UserProfile: any;
};

export interface AddProductAction {
  type: 'ADD_PRODUCT';
  payload: Product;
}

export type ActionTypes = AddProductAction;
