export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
};

export type Food = {
  image: string;
  id: number;
  name: string;
  price: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
};

export type Order = {
  id: number;
  userId: number;
  totalPrice: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  foodOrderItems: FoodOrderItem[];
};
export type FoodOrderItem = {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  createdAt: string;
  updatedAt: string;
  food: Food;
};
export type User = {
  id: number;
  email: string;
  password: string;
  age: number;
  role: string;
  address: any;
  phoneNumber: string;
};
