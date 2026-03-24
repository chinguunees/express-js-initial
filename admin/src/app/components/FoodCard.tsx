export const FoodCard = async (props: FoodProps) => {
  const { price, name, id } = props;
  return (
    <div className="relative mx-auto w-[270px] h-[241px] pt-0 mt-10 items-center border rounded-2xl flex flex-col font-display">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src="pizza.png"
        alt="food cover"
        className="relative z-20 w-[240px] h-[129px] object-cover rounded-2xl mt-4"
      />
      <div className="w-[240px] flex h-8 justify-between mt-2 items-center">
        <p className="font-bold text-[#EF4444] text-[14px] ">{name}</p>
        <p className="font-bold text-[12px]">₮{price}</p>
      </div>
      <div className="w-[240px] h-10 mt-2 pb-4">
        <p className="text-[12px]">
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
