import * as yup from "yup";

export const ussdTransferSchema = yup.object().shape({
  amount: yup.number().integer().min(0.1).required(),
  bank: yup.string().required(),
});
