import { getOrdersAdmin } from "@/lib/api";
import { Datepicker } from "../components/Date-picker";
import { Button } from "@/components/ui/button";
import { DeliveryButton } from "../components/DeliverButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Orders = async () => {
  const ordersAdmin = await getOrdersAdmin();

  return (
    <div className="font-display ml-10">
      <div className="w-[1171px] h-auto bg-white rounded-2xl flex flex-col px-5">
        <div className="flex h-[76px] items-center justify-between">
          <p className="font-bold">Orders</p>
          <div className="flex items-center gap-5">
            <Datepicker />
            <Button variant="secondary">Change Delivery state</Button>
          </div>
        </div>
      </div>

      <div className="w-[1171px] mt-2 bg-white rounded-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <input type="checkbox" />
              </TableHead>
              <TableHead>#</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Food</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Delivery Address</TableHead>
              <TableHead>Delivery State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordersAdmin.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <input type="checkbox" />
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.user.email}</TableCell>
                <TableCell>
                  {order.foodOrderItems
                    .map((item) => item.food.name)
                    .join(", ")}
                </TableCell>
                <TableCell>
                  {new Date(order.updatedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{order.totalPrice}₮</TableCell>
                <TableCell>{order.user.address}</TableCell>
                <TableCell>
                  <DeliveryButton
                    orderId={order.id}
                    orderStatus={order.status}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Orders;
