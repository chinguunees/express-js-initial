import { AddFoodTest } from "@/app/_components/AddFoodTest";
import CategoriesList from "@/app/_components/categories";
import { FoodCard } from "@/app/_components/FoodCard";
import { getCategory } from "@/app/lib/api";

const Foods = async () => {
  const categories = await getCategory();
  console.log(categories);

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
                  <FoodCard key={food.id} food={food} categories={categories} />
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
