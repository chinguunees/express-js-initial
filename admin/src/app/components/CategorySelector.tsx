import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEventHandler } from "react";

import { Category } from "@/lib/types";

type CategorySelectorProps = {
  categories: Category[];
  onSelect: (categoryId: string) => void;
};

export function CategorySelector(props: CategorySelectorProps) {
  const { categories, onSelect } = props;
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map((category) => {
            return (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
