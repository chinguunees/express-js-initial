"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { ChangeEventHandler, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { CategorySelector } from "./CategorySelector";
import { Category, Food } from "@/app/lib/types";
import { Pencil } from "lucide-react";

type EditFoodProps = {
  food: Food;
  categories: Category[];
};

export function EditFood({ food, categories }: EditFoodProps) {
  const [open, setOpen] = useState(false);
  const [foodName, setFoodName] = useState(food.name);
  const [priceValue, setPriceValue] = useState(food.price);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [foodImage, setFoodImage] = useState(food.image);
  const router = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFoodName(event.target.value);
  };
  const onChangePrice: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPriceValue(event.target.value);
  };
  const onChangeImage: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFoodImage(event.target.value);
  };
  const onSelect = (categoryId: string) => {
    setCategory(categoryId);
  };
  const onAddFood = async () => {
    setLoading(true);
    const postBody = {
      name: foodName,
      price: priceValue,
      foodCategoryId: Number(category),
      image: foodImage,
    };
    try {
      await fetch(`http://localhost:3001/foods/${food.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  const deleteFood = async () => {
    setLoading(true);
    try {
      await fetch(`http://localhost:3001/foods/${food.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-bold text-[#EF4444] font-display">
              Edit {foodName}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-2 font-display">
            <div className="flex gap-2">
              <Label className="w-40">Dish name</Label>
              <Input type="text" onChange={onChange} value={foodName} />
            </div>
            <div className="flex gap-2">
              <Label className="w-40">Image URL</Label>
              <Input type="text" onChange={onChangeImage} value={foodImage} />
            </div>
            {/* <div className="flex gap-2">
              <Label className="w-40">Ingredients</Label>
              <Input type="text" />
            </div> */}
            <div className="flex gap-2">
              <Label className="w-40">Price</Label>
              <Input type="text" onChange={onChangePrice} value={priceValue} />
            </div>
            <div className="flex gap-10">
              <Label className="w-40">Category</Label>
              <CategorySelector categories={categories} onSelect={onSelect} />
            </div>
          </div>

          <DialogFooter className="sm:justify-between font-display px-15">
            <Button
              type="button"
              onClick={deleteFood}
              disabled={loading}
              className="bg-red-400"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : "Delete"}
            </Button>
            <Button type="button" onClick={onAddFood} disabled={loading}>
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Update Dish"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
