import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { isProfileMe } from "@/app/lib/api";
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

type dataType = {
  user: {
    email: string;
    age: number;
    id: number;
  };
};

export async function Profile() {
  // const cookieStore = await cookies();
  // const token = cookieStore.get("token")?.value;

  // const response = await fetch(
  //   "https://express-js-initial.onrender.com/users/auth/me",
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${token}`,
  //     },
  //   },
  // );
  // const data: dataType = await response.json();

  return (
    <div className="max-w-[1440px] flex items-end justify-end mb-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">Profile</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <UserIcon />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOutIcon />
            <Link href={"/"}>Log out</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
