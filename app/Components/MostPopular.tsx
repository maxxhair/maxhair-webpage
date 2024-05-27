import { firaSans } from "../util/fonts";
import ProductCard from "./ProductCard";

const MostPopular = (props) => {
  return (
    <div className="m-8">
      <p
        className={`${firaSans.className} text-xl lg:text-3xl mt-10 font-bold`}
      >
        Most Popular
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {props.prods.slice(0, 4).map((product: any) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
