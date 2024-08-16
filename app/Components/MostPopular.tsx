import { firaSans } from "../util/fonts";
import ProductCard from "./ProductCard";

const MostPopular = (props) => {
  return (
    <div>
      <p
        className={`${firaSans.className} text-xl lg:text-3xl my-10 font-bold`}
      >
        Most Popular
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {props.prods.slice(0, 5).map((product: any) => (
          <ProductCard key={product._id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
