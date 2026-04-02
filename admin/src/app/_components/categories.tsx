import { getCategory } from "@/app/lib/api";
import { Button } from "@/components/ui/button";
import { AddCategory } from "./AddCategory";

const CategoriesList = async () => {
  const category = await getCategory();

  return (
    <div className="w-[1171px] h-[176px] bg-white rounded-2xl flex flex-col font-display">
      <h1 className="w-[1123px] m-4 font-display font-bold text-[20px]">
        Dishes Category
      </h1>
      <div className="flex ml-4 gap-3">
        {category.map((cat) => (
          <Button variant={"secondary"} key={cat.id}>
            {cat.name}
            <div className="bg-black w-5 rounded-2xl text-white">
              {cat.foods.length}
            </div>
          </Button>
        ))}
        <AddCategory />
      </div>
    </div>
  );
};

export default CategoriesList;
