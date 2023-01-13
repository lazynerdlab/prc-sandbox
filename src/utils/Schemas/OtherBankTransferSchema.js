import * as yup from "yup";

export const otherTransferSchema = yup.object().shape({
  amount: yup.string().min(1).required(),
  nuban: yup.string().min(10).max(10).required(),
  narration: yup.string().optional(),
});
