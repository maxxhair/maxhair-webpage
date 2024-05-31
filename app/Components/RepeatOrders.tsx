import { firaSans } from "../util/fonts";
import ProductCard from "./ProductCard";

const RepeatOrders = (props) => {
  return (
    <div className="m-8">
      <p className={`${firaSans.className} text-xl lg:text-3xl mt-8 font-bold`}>
        Repeat Orders
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {props.prods.slice(5, 9).map((product: any) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default RepeatOrders;
