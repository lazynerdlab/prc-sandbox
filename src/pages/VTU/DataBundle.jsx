import airtel from "../../assets/airtel.jpg";
import mtn from "../../assets/mtn.jpg";
import glo from "../../assets/glo.jpg";
import etisalat from "../../assets/9mobile.jpg";
import Loader from "../../utils/Loader";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";
import { useFormik } from "formik";
import { phoneNumberSchema } from "../../utils/Schemas/phoneNumberSchema";
import { useState } from "react";
import { useVtuDataMutation } from "../../features/api/vtuApiSlice";
import AntCordinatedSelect from "./AntCordinatedSelect";
import { variations } from "./bundle";
import { airtime } from "./airtime";
const DataBundle = () => {
  const data = [
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
  const [purchaseData, { isLoading, error }] = useVtuDataMutation();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [amount, setAmount] = useState(
    variations[data[0].value][0].label.split("₦")[1]
  );
  const [provider, setProvider] = useState(variations[data[0].value]);
  const [bundle, setBundle] = useState(variations[data[0].value][0]);
  const onSubmit = async (values, actions) => {
    const res = await purchaseData({
      network: provider,
      phone: values.phone,
      amount,
      variation_id: bundle,
    });
    if (res.data) {
      actions.resetForm();
      setSuccess(true);
    }
    if (res.error) {
      actions.resetForm();
      setErr(true);
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
      phone: "+234",
    },
    validationSchema: phoneNumberSchema,
    onSubmit,
  });
  console.log(values);

  //   const handleProvider = (value) => setProvider(value.value);
  console.log(bundle, provider);

  return (
    <>
      <SuccessModal alter={success} setAlter={() => setSuccess(false)} />
      <ErrorModal
        alter={err}
        message={error?.message}
        setAlter={() => setErr(false)}
      />
      <main className="flex flex-col items-center justify-center">
        <div className="w-[60%] m-auto flex flex-col justify-center items-center p-[1rem] pt-[2rem] rounded-[5px] bg-gray-50">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
          >
            <label htmlFor="nuban" className="block mb-[1rem]">
              Provider:
            </label>
            <AntCordinatedSelect
              data={data}
              variations={variations}
              bundle={bundle}
              provider={provider}
              setProvider={setProvider}
              setBundle={setBundle}
              setAmount={setAmount}
              title="Available Bundles"
            />
            <div className="my-[0.5rem]">
              <label htmlFor="phone" className="block mb-[0.5rem]">
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
            <label htmlFor="amount" className="block my-[0.5rem]">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              disabled
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              value={amount}
              required
            />
            <button
              type="submit"
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

export default DataBundle;
