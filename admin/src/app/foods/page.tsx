import { getCategory } from "@/lib/api";
import { FoodCard } from "../components/FoodCard";
import { Button } from "@/components/ui/button";
import CategoriesList from "../components/categories";
import AppetizerList from "../components/AppetizerList";
import SaladsList from "../components/SaladsList";
import { AddFoodTest } from "../components/AddFoodTest";

const Foods = async () => {
  const categories = await getCategory();

  const filteredCategories = categories.filter(
    (category) => category.foods.length,
  );

  return (
    <div className="flex flex-col gap-2 ml-50 h-auto w-[1171px] font-display">
      <CategoriesList />
      {filteredCategories.map((category) => {
        return (
          <div key={category.id} className="bg-white p-4 rounded-4xl my-2">
            <h1 className="font-bold text-[20px]">
              {category.name} {category.foods.length}
            </h1>
            <div className="grid grid-cols-4 justify-start">
              <AddFoodTest categories={categories} />
              {category.foods.map((food) => {
                return (
                  <FoodCard
                    key={food.id}
                    name={food.name}
                    id={food.id}
                    price={food.price}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Foods;
