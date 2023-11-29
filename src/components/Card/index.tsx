import Button from "../Button";
import "./Card.css";

type cardProps = {
  image: string;
  title: string;
  price: number;
  description: string;
};

const Card = ({ image, title, price, description }: cardProps) => {
  const AddToCartHandler = () => {
    console.log("Add to cart");
  };

  return (
    <div className="mainCardBody">
      <div className="flip-card-inner h-[280px] md:h-[310px] bg-white dark:bg-gray-500 cursor-defaultn">
        {/* Front */}
        <div className="box-border flip-card-front w-full h-full rounded-md">
          <div className="flex justify-center items-center h-[240px] md:h-[270px] w-full relative overflow-hidden">
            <img
              className="rounded absolute top-0 w-full h-full max-h-full max-w-full filter blur-xl"
              src={image}
              alt="product"
            />
            <img
              className="rounded object-contain z-10 max-h-full max-w-full"
              src={image}
              alt="product"
            />
          </div>
          <div className="flex justify-between items-center h-10 p-1 md:p-2 lg:p-3 w-full">
            <p className="text-sm md:text-base text-[#1c1c1c]">
              {title.length > 18 ? title.slice(0, 17) + "..." : title}
            </p>
            <p className="text-xs text-[#777777]">
              4.5 <span className="text-xl mt-2 text-[#777777]">&#9733;</span>
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="p-2 flex flex-col justify-center items-center flip-card-back h-full w-full ">
          <p className="text-sm md:text-lg cursor-pointer text-[#1c1c1c] mb-3">
            {title.length > 20 ? title.slice(0, 20) + "..." : title}
          </p>
          <p className="text-sm md:text-lg font-semibold text-red-700 mb-2 dark:text-red-500">
            {price}
          </p>
          <div className="h-[120px]">
            <p className="text-sm text-[#4b4b4b] dark:text-gray-200 text-center cursor-pointer">
              {description.length > 120
                ? description.slice(0, 120) + "..."
                : description}
            </p>
          </div>
          <div className="mt-4 md:mt-8 w-full flex justify-center items-center">
            <Button
              name="Add to cart"
              type="button"
              onClick={AddToCartHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
