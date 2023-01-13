import * as yup from "yup";
import "yup-phone-lite";

export const KYCSchema = yup.object().shape({
  address: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  middlename: yup.string().notRequired(),
  phone: yup
    .string()
    .min(10)
    .max(10)
    .phone("NG", "Enter a Valid phone number")
    .required(""),
});
