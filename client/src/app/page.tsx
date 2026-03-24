import { getCategory } from "@/lib/api";
import { FoodCard } from "./components/FoodCard";

const Home = async () => {
  const category = await getCategory();
  console.log(category);

  return (
    <div>
      {category.map((cat) => (
        <div>
          {cat.foods.map((food) => (
            <div className="flex flex-col gap-10">
              <FoodCard id={food.id} name={food.name} price={food.price} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
