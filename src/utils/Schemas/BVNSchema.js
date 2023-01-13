import * as yup from "yup";

export const BVNSchema = yup.object().shape({
  bvn: yup.number().min(10).max(10).required(),
});
