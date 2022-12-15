import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Please Enter your email address").required(),
  password: yup.string().required(),
});
