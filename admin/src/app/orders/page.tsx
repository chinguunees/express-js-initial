import { getCategory } from "@/lib/api";

const Orders = async () => {
  const category = await getCategory();
  console.log(category);
  const appetizers = category.find((cat) => cat.name === "Appetizers")?.foods;
  console.log("end", appetizers);
  const salads = category.find((cat) => cat.name === "Salads")?.foods;
  const desserts = category.find((cat) => cat.name === "Desserts")?.foods;

  return <div>Orders Page</div>;
};
export default Orders;
