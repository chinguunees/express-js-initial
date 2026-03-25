import { FoodCard } from "../components/FoodCard";
import { Button } from "@/components/ui/button";
import { getCategory } from "@/lib/api";
import { AddFoodTest } from "./AddFoodTest";

const AppetizerList = async () => {
  const category = await getCategory();
  console.log(category);
  const appetizers = category.find((cat) => cat.name === "Appetizers")?.foods;

  return (
    <div className="grid grid-cols-4 gap-4">
      <AddFoodTest />

      {appetizers?.map((food) => (
        <FoodCard
          key={food.id}
          name={food.name}
          id={food.id}
          price={food.price}
        />
      ))}
    </div>
  );
};
export default AppetizerList;
