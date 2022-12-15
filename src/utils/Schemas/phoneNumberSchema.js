import * as yup from "yup";
import "yup-phone-lite";

const phoneNumber =
  /^([0]{1}|\+?[2][3][4])([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g;

export const phoneNumberSchema = yup.object().shape({
  phone: yup
    .string()
    .min(10)
    .max(10)
    .phone("NG", "Enter a Valid phone number")
    .required(""),
});
