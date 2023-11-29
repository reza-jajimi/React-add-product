import * as Yup from "yup";

export const AddProductSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  price: Yup.string().required("Price is required"),
  description: Yup.string().required("Description is required"),
});
