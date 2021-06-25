import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email().trim().required("email is required"),
  password: Yup.string().required("password is required"),
});

export const AddProviderSchema = Yup.object().shape({
  name: Yup.string().required("provider name is required"),
});

export const AddProductsSchema = Yup.object().shape({
  name: Yup.string().required("product name is required"),
  limit: Yup.number().required("sms rate limit is required")
});
