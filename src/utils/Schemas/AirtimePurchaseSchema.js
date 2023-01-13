import * as yup from "yup";
import "yup-phone-lite";

const phoneNumber =
  /^([0]{1}|\+?[2][3][4])([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g;

export const AirtimePurchaseSchema = yup.object().shape({
  amount: yup.number().integer().positive().min(50.0).required(),
  phone: yup
    .string()
    .min(10)
    .max(10)
    .phone("NG", "Enter a Valid phone number")
    .required(""),
});
