import { getCategory } from "@/lib/api";
import { FoodCard } from "../components/FoodCard";
import { Button } from "@/components/ui/button";

const Foods = async () => {
  const category = await getCategory();
  console.log(category);
  const appetizers = category.find((cat) => cat.name === "Appetizers")?.foods;
  console.log("end", appetizers);
  const salads = category.find((cat) => cat.name === "Salads")?.foods;
  const desserts = category.find((cat) => cat.name === "Desserts")?.foods;

  return (
    <div>
      <div className="flex flex-col gap-6 ml-50">
        <div className="w-[1171px] h-[176px] bg-white rounded-2xl flex flex-col font-display">
          <h1 className="w-[1123px] m-4 font-display font-bold text-[20px]">
            Dishes Category
          </h1>
          <div className="flex ml-4 gap-3">
            {category.map((cat) => (
              <Button variant={"secondary"} key={cat.id}>
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-[1171px] h-auto bg-white rounded-2xl p-5">
          <h1 className="font-display font-bold">Appetizer</h1>
          <div className="flex">
            <div className="grid grid-cols-4 gap-4">
              <div className="relative mx-auto w-[270px] h-[241px] pt-0 mt-10 items-center  border rounded-2xl flex flex-col font-display border-red-500 border-dashed">
                {" "}
                <div className="flex flex-col items-center mt-23 gap-2">
                  <Button
                    variant={"destructive"}
                    className="rounded-3xl bg-red-400 text-white w-10 h-10 text-xl text-center"
                  >
                    +
                  </Button>
                  <p>Add new Dish to Appetizer</p>
                </div>
              </div>
              {appetizers?.map((food) => (
                <FoodCard
                  key={food.id}
                  name={food.name}
                  id={food.id}
                  price={food.price}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[1171px] h-auto bg-white rounded-2xl flex flex-col p-5">
          <h1 className="font-display font-bold">Salads</h1>
          <div className="flex">
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
