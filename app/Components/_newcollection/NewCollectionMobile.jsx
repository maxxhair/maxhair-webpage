"use client";
import { useEffect, useState } from "react";
import { firaSansMedium } from "../../util/fonts";
import ProductCard from "../ProductCard";
import { getProducts } from "../../util/serverSideProps";

function NewCollectionMobile({ cards }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="lg:hidden flex flex-col md:gap-[40px] gap-[20px] p-[40px] justif-center items-center bg-[#FAFAFA]">
      <span
        className={` ${firaSansMedium.className} lg:headline-large md:headline-medium headline-small text-[#242424]`}
      >
        New Collection
      </span>
      {products?.slice(0, 4).map((product, index) => {
        return (
          <div
            key={index + "---"}
            className="group relative flex flex-col justify-center lg:w-[400px] md:w-[300px] w-[200px] overflow-hidden "
          >
            <ProductCard key={product._id} item={product} />
          </div>
        );
      })}
    </div>
  );
}

export default NewCollectionMobile;
