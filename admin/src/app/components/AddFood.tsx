import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Addfood = () => {
  return (
    <div>
      <div className="w-[472px] h-[596px] rounded-2xl bg-white mx-auto flex flex-col items-start justify-evenly">
        <div className="flex justify-between mx-6 pt-6">
          <h1>Dishes info</h1>
          <p>x</p>
        </div>
        <div className="flex mt-20 w-[424px] gap-10 p-10">
          <p>Dish name</p>
          <input className="border-2 border-black" type="text" />
        </div>
        <div className="flex mt-0 gap-10 p-10">
          <p>Dish Category</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex mt-0 gap-10 p-10">
          <p>Ingredients</p>
          <input className="border-2 border-black" type="text" />
        </div>
        <div className="flex mt-0 gap-10 p-10">
          <p>Price</p>
          <input className="border-2 border-black" type="text" />
        </div>
        <div className="flex mt-0 gap-10 p-10">
          <p>Image</p>
          <input className="border-2 border-black" type="file" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Addfood;
