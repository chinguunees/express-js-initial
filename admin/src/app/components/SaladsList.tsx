import { FoodCard } from "../components/FoodCard";
import { Button } from "@/components/ui/button";
import { getCategory } from "@/lib/api";
import { AddFoodTest } from "./AddFoodTest";

const SaladsList = async () => {
  const category = await getCategory();
  console.log(category);
  const salads = category.find((cat) => cat.name === "Salads")?.foods;
  return (
    <div className="w-[1171px] h-auto bg-white rounded-2xl flex flex-col p-5">
      <h1 className="font-display font-bold">Salads</h1>
      <div className="grid grid-cols-4 gap-4">
        <AddFoodTest />
        {salads?.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            id={food.id}
            price={food.price}
          />
        ))}
      </div>
    </div>
  );
};
export default SaladsList;
