import { useFormik } from "formik";

export const useLoginForm = (submitHandler: any) => {
  const initialValues = {
    email: "",
    password: "",
  };

  return useFormik({
    initialValues,
    onSubmit: submitHandler,
  });
};
