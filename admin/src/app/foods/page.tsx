import { getCategory } from "@/lib/api";
import { FoodCard } from "../components/FoodCard";
import { Button } from "@/components/ui/button";
import CategoriesList from "../components/categories";
import AppetizerList from "../components/AppetizerList";
import SaladsList from "../components/SaladsList";

const Foods = async () => {
  const category = await getCategory();

  const desserts = category.find((cat) => cat.name === "Desserts")?.foods;

  return (
    <div>
      <div className="flex flex-col gap-6 ml-50">
        <CategoriesList />
        <div className="w-[1171px] h-auto bg-white rounded-2xl p-5">
          <h1 className="font-display font-bold">Appetizer</h1>
          <div className="flex">
            <AppetizerList />
          </div>
        </div>
        <SaladsList />
        <div className="w-[1171px] h-auto bg-white rounded-2xl flex flex-col p-5">
          <h1 className="font-display font-bold">Desserts</h1>
          <div className="flex">
            {desserts?.map((food) => (
              <FoodCard
                key={food.id}
                name={food.name}
                id={food.id}
                price={food.price}
              />
            ))}
          </div>
        </div>
        <div className="w-[1171px] h-auto bg-white rounded-2xl flex flex-col p-5">
          <h1 className="font-display font-bold">All Foods</h1>
          <div className="grid grid-cols-4">
            {category.map((cat) =>
              cat.foods.map((food) => (
                <FoodCard
                  key={food.id}
                  name={food.name}
                  id={food.id}
                  price={food.price}
                />
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Foods;
