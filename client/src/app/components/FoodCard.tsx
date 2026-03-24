import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategory } from "@/lib/api";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const FoodCard = async (props: FoodProps) => {
  const { price, name, id } = props;
  return (
    <div className="relative mx-auto w-[400px] h-[342px] pt-0 mt-10 items-center border rounded-2xl flex flex-col">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src="pizza.png"
        alt="Event cover"
        className="relative z-20 w-[365px] h-[210px] object-cover rounded-2xl mt-4"
      />
      <div className="w-[365px] flex h-8 justify-between mt-5 items-center">
        <p className="font-bold text-amber-700 text-[24px] ">{name}</p>
        <p className="font-bold text-[18px]">${price}</p>
      </div>
      <div className="w-[365px] h-10 mt-2 pb-4">
        <p className="text-[14px]">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
};
type FoodProps = {
  price: string;
  name: string;
  id: number;
};
