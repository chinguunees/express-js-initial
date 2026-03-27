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
