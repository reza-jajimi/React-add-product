import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

const AllProductsContainer = () => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      const result = await axios.get("http://localhost:4000/api/products");
      setProducts(result.data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log(products.image);

  if (loading) {
    return <h3 className="text-3xl text-center">loading...</h3>;
  }

  if (products?.length === 0) {
    return (
      <h3 className="text-2xl text-center text-amber-900">There are no products available!</h3>
    );
  }

  return (
    <>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products?.map((item: any, index: number) => (
          <Card
            key={index}
            description={item.description}
            image={item.image[0]}
            price={item.price}
            title={item.title}
          />
        ))}
      </section>
    </>
  );
};

export default AllProductsContainer;
