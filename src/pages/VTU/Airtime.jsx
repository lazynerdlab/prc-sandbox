import AntSelect from "./AntSelect";
import airtel from "../../assets/airtel.jpg";
import mtn from "../../assets/mtn.jpg";
import glo from "../../assets/glo.jpg";
import etisalat from "../../assets/9mobile.jpg";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";
import Loader from "../../utils/Loader";
// import { airtime } from "./airtime";
import { useState } from "react";
import { useFormik } from "formik";
import { useVtuAirtimeMutation } from "../../features/api/vtuApiSlice";
import { AirtimePurchaseSchema } from "../../utils/Schemas/AirtimePurchaseSchema";
const Airtime = () => {
  const airtime = [
    {
      value: "mtn",
      label: (
        <div className="flex justify-between items-center">
          MTN <img src={mtn} className="h-[1.2rem] w-[1.2rem]" />
        </div>
      ),
    },
    {
      value: "airtel",
      label: (
        <div className="flex justify-between items-center">
          AIRTEL <img src={airtel} className="h-[1.2rem] w-[1.2rem]" />
        </div>
      ),
    },
    {
      value: "glo",
      label: (
        <div className="flex justify-between items-center">
          GLO <img src={glo} className="h-[1.2rem] w-[1.2rem]" />
        </div>
      ),
    },
    {
      value: "etisalat",
      label: (
        <div className="flex justify-between items-center">
          9MOBILE <img src={etisalat} className="h-[1.2rem] w-[1.2rem]" />
        </div>
      ),
    },
  ];
  const [provider, setProvider] = useState(airtime[0].value);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [purchaseAirtime, { isLoading, error }] = useVtuAirtimeMutation();
  const handleProvider = (value) => setProvider(value.value);
  console.log(provider);

  const onSubmit = async (values, actions) => {
    const res = await purchaseAirtime({
      phone: values.phone,
      amount: values.amount,
      network: provider,
    });
    if (res.data) {
      setSuccess(true);
      actions.resetForm();
    }
    if (res.error) {
      setErr(true);
      actions.resetForm();
    }
  };

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
      phone: "",
      amount: "",
    },
    validationSchema: AirtimePurchaseSchema,
    onSubmit,
  });
  console.log(values);

  return (
    <>
      <SuccessModal alter={success} setAlter={() => setSuccess(false)} />
      <ErrorModal
        alter={err}
        message={error?.message}
        setAlter={() => setErr(false)}
      />
      <main className="flex flex-col items-center justify-center pt-[1rem]">
        <div className="w-[50%] m-auto flex flex-col justify-center items-center p-[1rem] pt-[2rem] rounded-[5px] bg-gray-50">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
          >
            <label htmlFor="nuban" className="block mb-[1rem]">
              Provider:
            </label>
            <AntSelect data={airtime} handleChange={handleProvider} />

            <div className="my-[0.5rem]">
              <label htmlFor="phone" className="block mb-[1rem]">
                Phone Number:
              </label>
              <input
                type="number"
                id="phone"
                className={
                  errors.phone
                    ? "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                required
              />
              {errors.phone && touched.phone && (
                <p className="text-red-600">{errors.phone}</p>
              )}
            </div>
            <div className="my-[0.5rem]">
              <label htmlFor="amount" className="block mb-[1rem]">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                className={
                  errors.amount
                    ? "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
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
            <button
              tyoe="submit"
              className="bg-blue-600 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white"
            >
              {isLoading && <Loader />}
              Proceed
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Airtime;
