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

export function AddFoodTest() {
  const [open, setOpen] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const router = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFoodName(event.target.value);
  };
  const onChangePrice: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPriceValue(event.target.value);
  };
  const onChangeCategory: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCategory(event.target.value);
  };

  const onAddFood = async () => {
    setLoading(true);
    const postBody = {
      name: foodName,
      price: priceValue,
      foodCategoryId: Number(category),
    };
    try {
      await fetch("http://localhost:3001/foods", {
        method: "POST",
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

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="relative mx-auto w-[270px] h-[241px] pt-0 mt-10 items-center  border rounded-2xl flex flex-col font-display border-red-500 border-dashed">
            {" "}
            <div className="flex flex-col items-center mt-23 gap-2">
              <Button
                variant={"destructive"}
                className="rounded-3xl bg-red-400 text-white w-10 h-10 text-xl text-center"
              >
                +
              </Button>
              <p>Add new Dish</p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add new</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              <Label className="w-40">Dish name</Label>
              <Input type="text" onChange={onChange} />
            </div>
            <div className="flex gap-2">
              <Label className="w-40">Dish category</Label>
              <Input type="text" onChange={onChangeCategory} />
            </div>
            {/* <div className="flex gap-2">
              <Label className="w-40">Ingredients</Label>
              <Input type="text" />
            </div> */}
            <div className="flex gap-2">
              <Label className="w-40">Price</Label>
              <Input type="text" onChange={onChangePrice} />
            </div>
            {/* <div className="flex gap-2">
              <Label className="w-40">Image</Label>
              <Input type="text" />
            </div> */}
          </div>

          <DialogFooter className="sm:justify-end">
            <Button type="button" onClick={onAddFood} disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Add Dish"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
