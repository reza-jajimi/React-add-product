import { useNavigate } from "react-router-dom";
import image from "../../assets/image/multiple-file.png";
import Button from "../Button";

const HomeContainer = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="grid grid-cols-2 max-w-[800px] mx-auto mt-10">
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl text-[#222222] font-semibold">Home page</h2>
          <h3 className="text-2xl text-[#4e4e4e] mt-3">
            Create React <span className="text-[#3b3b3b]">Multiple</span> File
            Upload
          </h3>
          <div className="mt-7">
            <Button
              name="Add product"
              type="button"
              onClick={() => navigate("add_new_product")}
            />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex items-center justify-center">
          <img className="max-w-[300px] mt-3" src={image} alt="multiple" />
        </div>
      </section>
    </>
  );
};

export default HomeContainer;
