import { useState } from "react";
import { useFormik } from "formik";
import SearchBanks from "../../utils/ComboBox";
import { ussdBanks } from "../../features/flutterwave/USSDBanks";
import { ussdTransferSchema } from "../../utils/Schemas/ussdTransferSchema";
const USSD = () => {
  const [bankCode, setBankCode] = useState({ name: "", value: "" });
  const onSubmit = () => {};
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      amount: "",
      bank: bankCode.value,
    },
    validationSchema: ussdTransferSchema,
    onSubmit,
  });
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-[50%] m-auto flex flex-col justify-center items-center p-[1rem] rounded-[5px] bg-gray-50">
        <form
          className="w-full flex flex-col justify-stretch align-stretch relative"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="amount" className="block mb-[0.5rem]">
              Select Bank:
            </label>
            <SearchBanks
              Array={ussdBanks}
              selected={bankCode}
              setSelected={setBankCode}
            />
          </div>
          <div className="my-[0.5rem]">
            <label htmlFor="amount" className="block mb-[0.5rem]">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              className={
                errors.amount
                  ? "border-solid text-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                  : "border-solid text-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
              }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.amount}
              required
            />
            {errors.amount && touched.amount && (
              <p className="text-red-600">{errors.amount}</p>
            )}
          </div>
          <button className="bg-blue-600 mb-[0.5rem] border-none p-[1rem] mt-[1rem] rounded-[5px] text-white">
            Proceed
          </button>
        </form>
      </div>
    </main>
  );
};

export default USSD;
