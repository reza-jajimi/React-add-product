import { useState, ChangeEvent } from "react";
import { resizeImage } from "../../utils/resizeImage";
import { Formik, Form } from "formik";
import ImportImage from "./ImportImage";
import { InputField, TextareaField } from "./InputField";
import Button from "../Button";
import { AddProductSchema } from "../../data/FormValidation";
import { AddProductValues } from "../../data/FormInitialValues";
import axios from "axios";

const AddProductContainer = () => {
  const [imageFiles, setImageFiles] = useState<any>([]);

  //=============================== Select Image ===================================
  const onchangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    for (let i = 0; i < e.target.files.length; i++) {
      if (
        e.target.files.length > 14 ||
        imageFiles.length + e.target.files.length > 14
      ) {
        return alert("The number of selected images is more than 14");
      }
      const resizeImages = await resizeImage(e.target.files[i]); // Resize image
      setImageFiles((currState: any) => [...currState, resizeImages]);
    }
  };

  //=============================== Remove Image ===================================
  const handleRemoveImage = (index: number) => {
    const filterImages = imageFiles.filter(
      (item: { name: string }) => item.name !== imageFiles[index].name
    );
    setImageFiles(filterImages);
  };

  //=============================== Post to server =================================

  const handleSubmit = async (values: any, { resetForm }: any) => {
    const newValues = {
      ...values,
      image: imageFiles,
    };

    const formData = new FormData();
    imageFiles.forEach((image: File) => {
      formData.append("image", image);
    });
    formData.append("title", newValues.title);
    formData.append("price", newValues.price);
    formData.append("description", newValues.description);

    // post to your Api address

    try {
      const result = await axios.post(
        "http://localhost:4000/api/upload",
        formData
      );
      if (result) {
        resetForm({ values: "" });
        setImageFiles([]);
        alert("The product has been successfully registered");
      } else {
        alert("Try again");
      }
    } catch (error: any) {
      console.log(error.response.data.errors);
    }
  };

  return (
    <>
      <section className="max-w-[800px] mx-auto p-2">
        <Formik
          initialValues={AddProductValues}
          validationSchema={AddProductSchema}
          onSubmit={handleSubmit}
        >
          {({ handleBlur, handleChange, values }) => (
            <Form>
              <h3 className="text-2xl mb-3 text-[#222222] text-center">
                Add product
              </h3>
              <ul className="text-xs mb-2 text-[#555555] font-sans list-disc pl-4">
                <li>
                  <p>Click on the photo to remove it</p>
                </li>
                <li>
                  <p>Click on the + icon to add a photo</p>
                </li>
              </ul>
              <div className="border border-amber-900/20 bg-white/20 rounded-sm mb-2 p-4">
                <ImportImage
                  handleRemoveImage={handleRemoveImage}
                  imageFiles={imageFiles}
                  onChange={onchangeImage}
                />
              </div>
              <div className="border border-amber-900/20 bg-white/20 grid grid-cols-1 md:grid-cols-2 gap-2 rounded-sm mb-2 p-4">
                <InputField
                  placeholder="Enter the product title..."
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  inputType="text"
                  name="title"
                  title="Title"
                  value={values.title}
                />
                <InputField
                  placeholder="Enter the product price..."
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  inputType="number"
                  name="price"
                  title="Price"
                  value={values.price}
                />
                <div className="col-span-1 md:col-span-2">
                  <TextareaField
                    placeholder="Enter the product description..."
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    name="description"
                    title="Description"
                    value={values.description}
                  />
                </div>
                <div className="flex justify-center mb-4 col-span-1 md:col-span-2">
                  <Button name="Create product" type="submit" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default AddProductContainer;
