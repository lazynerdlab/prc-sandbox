import airtel from "../../assets/airtel.jpg";
import mtn from "../../assets/mtn.jpg";
import glo from "../../assets/glo.jpg";
import etisalat from "../../assets/9mobile.jpg";
import { useFormik } from "formik";
import { phoneNumberSchema } from "../../utils/Schemas/phoneNumberSchema";
import { useState } from "react";
import AntCordinatedSelect from "./AntCordinatedSelect";
const DataBundle = () => {
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
      phone: "+234",
    },
    validationSchema: phoneNumberSchema,
    onSubmit,
  });
  console.log(values);
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
  const variations = {
    mtn: [
      { label: "MTN Data 500MB – 30 Days-₦159", value: "500" },
      { label: "MTN Data 1GB – 30 Days-₦289", value: "M1024" },
      { label: "MTN Data 2GB – 30 Days-₦579", value: "M2024" },
      { label: "MTN Data 3GB – 30 Days-₦869", value: "3000" },
      { label: "MTN Data 5GB – 30 Days-₦1449", value: "5000" },
      { label: "MTN Data 6GB – 7 Days-₦1499", value: "mtn-20hrs-1500" },
      { label: "MTN Data 10GB – 30 Days-₦2899", value: "10000" },
      { label: "MTN Data 30GB – 30 Days-₦4979", value: "mtn-30gb-8000" },
      { label: "MTN Data 40GB – 30 Days-₦9899", value: "mtn-40gb-10000" },
      { label: "MTN Data 75GB – 30 Days-₦14979", value: "mtn-75gb-15000" },
    ],
    airtel: [
      { label: "Airtel Data 750MB – 14 Days-₦545", value: "airt-550" },
      { label: "Airtel Data 1GB – 1 Day-₦329", value: "airt-330x" },
      { label: "Airtel Data 1.5GB – 30 Days-₦1079", value: "airt-1100" },
      { label: "Airtel Data 2GB – 30 Days-₦1289", value: "airt-1300" },
      { label: "Airtel Data 3GB – 30 Days-₦1639", value: "airt-1650" },
      { label: "Airtel Data 4.5GB – 30 Days-₦2189", value: "airt-2200" },
      { label: "Airtel Data 6GB – 7 Days-₦1700", value: "airt-1650-2" },
      { label: "Airtel Data 10GB – 30 Days-₦3289", value: "airt-3300" },
      { label: "Airtel Data 20GB – 30 Days-₦5489", value: "airt-5500" },
      { label: "Airtel Data 40GB – 30 Days-₦10799", value: "airt-11000" },
    ],
    glo: [
      { label: "Glo Data 1GB – 5 Nights-₦100", value: "glo100x" },
      { label: "Glo Data 1.25GB – 1 Day(Sunday)-₦200", value: "glo200x" },
      { label: "Glo Data 1.35GB – 14 Days-₦489", value: "G500" },
      { label: "Glo Data 2.9GB – 30 Days-₦1000", value: "G1000" },
      { label: "Glo Data 5.8GB – 30 Days-₦1949", value: "G2000" },
      { label: "Glo Data 7.7GB – 30 Days-₦2500", value: "G2500" },
      { label: "Glo Data 10GB – 30 Days-₦2949", value: "G3000" },
      { label: "Glo Data 13.25GB – 30 Days-₦3889", value: "G4000" },
      { label: "Glo Data 18.25GB – 30 Days-₦4849", value: "G5000" },
      { label: "Glo Data 29.5GB – 30 Days-₦7799", value: "G8000" },
      { label: "Glo Data 50GB – 30 Days-₦9899", value: "glo10000" },
    ],
    etisalat: [
      { label: "9mobile Data 1GB – 30 Days-₦1000", value: "9MOB1000" },
      { label: "9mobile Data 2.5GB – 30 Days-₦2000", value: "9MOB34500" },
      { label: "9mobile Data 11.5GB – 30 Days-₦8000", value: "9MOB8000" },
      { label: "9mobile Data 15GB – 30 Days-₦10000", value: "9MOB5000" },
    ],
  };
  const [amount, setAmount] = useState(
    variations[data[0].value][0].label.split("₦")[1]
  );
  const [provider, setProvider] = useState(variations[data[0].value]);
  const [bundle, setBundle] = useState(variations[data[0].value][0]);

  //   const handleProvider = (value) => setProvider(value.value);
  console.log(bundle, provider);

  return (
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
            Proceed
          </button>
        </form>
      </div>
    </main>
  );
};

export default DataBundle;
