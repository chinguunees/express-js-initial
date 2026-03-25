import { getCategory } from "@/lib/api";
import { Datepicker } from "../components/Date-picker";
import { Button } from "@/components/ui/button";

import { DeliveryButton } from "../components/DeliverButton";

const Orders = () => {
  return (
    <div className="font-display ml-10">
      <div className="w-[1171px] h-auto bg-red-300 rounded-2xl flex flex-col px-5">
        <div className="flex h-[76px] items-center justify-between">
          <p className="font-bold">Orders</p>
          <div className="flex items-center justify-center gap-5">
            <Datepicker />
            <Button variant="secondary">Change Delivery state</Button>
          </div>
        </div>
      </div>
      <div className="w-[1171px] h-[52px] bg-red-200 rounded-t-sm flex px-5 mt-2 justify-between items-center border-b-[0.5px] border-black">
        <input type="checkbox" />
        <p>№</p>
        <p>Customer</p>
        <p>Food</p>
        <p>Date</p>
        <p>Total</p>
        <p>Delivery Address</p>
        <p>Delivery State</p>
      </div>
      <div className="w-[1171px] h-[52px] bg-red-200 flex px-5 justify-between items-center border-b-[0.5px] border-black">
        <input type="checkbox" />
        <p>1</p>
        <p>test@gmail.com</p>
        <p>Tsuivan</p>
        <p>2026.03.24</p>
        <p>37,800₮</p>
        <p>ХУД 2-р хороо Хөрш заан хотхон</p>
        <DeliveryButton />
      </div>
      <div className="w-[1171px] h-[52px] bg-red-200 flex px-5 justify-between items-center border-b-[0.5px] border-black">
        <input type="checkbox" />
        <p>1</p>
        <p>test@gmail.com</p>
        <p>Tsuivan</p>
        <p>2026.03.24</p>
        <p>37,800₮</p>
        <p>ХУД 2-р хороо Хөрш заан хотхон</p>
        <DeliveryButton />
      </div>
      <div className="w-[1171px] h-[52px] bg-red-200 flex px-5 justify-between items-center border-b-[0.5px] border-black">
        <input type="checkbox" />
        <p>1</p>
        <p>test@gmail.com</p>
        <p>Tsuivan</p>
        <p>2026.03.24</p>
        <p>37,800₮</p>
        <p>ХУД 2-р хороо Хөрш заан хотхон</p>
        <DeliveryButton />
      </div>
      <div className="w-[1171px] h-[52px] bg-red-200 flex px-5 justify-between items-center border-b-[0.5px] border-black">
        <input type="checkbox" />
        <p>1</p>
        <p>test@gmail.com</p>
        <p>Tsuivan</p>
        <p>2026.03.24</p>
        <p>37,800₮</p>
        <p>ХУД 2-р хороо Хөрш заан хотхон</p>
        <DeliveryButton />
      </div>
    </div>
  );
};
export default Orders;
