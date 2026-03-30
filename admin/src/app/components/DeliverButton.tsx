"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { editOrderAdmin, getOrdersAdmin } from "@/lib/api";
import { useRouter } from "next/navigation";

type DeliveryButtonProps = {
  orderStatus: string;
  orderId: number;
};

export function DeliveryButton({ orderId, orderStatus }: DeliveryButtonProps) {
  const [status, setStatus] = React.useState(orderStatus);
  // const [showPanel, setShowPanel] = React.useState(false);
  const router = useRouter();

  const onCheckedChange = async (status: string) => {
    setStatus(status);
    console.log(orderId, orderStatus, status);

    await editOrderAdmin(orderId, status);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{status}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={status === "CANCELLED"}
            onCheckedChange={() => onCheckedChange("CANCELLED")}
          >
            CANCELLED
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === "DELIVERED"}
            onCheckedChange={() => onCheckedChange("DELIVERED")}
          >
            DELIVERED
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === "PENDING"}
            onCheckedChange={() => onCheckedChange("PENDING")}
          >
            PENDING
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
