import { Category } from "./types";

// const urlCategory = `http://localhost:3001/category/`;
const urlCategory = `https://express-js-initial.onrender.com/category/`;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
type GetCategoryResponse = {
  category: Category[];
};

export const getCategory = async () => {
  const response = await fetch(urlCategory, options);
  const data: GetCategoryResponse = await response.json();
  return data.category;
};
