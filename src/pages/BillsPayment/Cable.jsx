import { CableData, CableVariations } from "./cableinfo";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";
import { useState } from "react";
import { useFormik } from "formik";
import {
  useVtuCableTvMutation,
  useVtuVerifyUserMutation,
} from "../../features/api/vtuApiSlice";
import { CablePurchaseSchema } from "../../utils/Schemas/CablePurchaseSchema";
import AntCordinatedSelect from "../VTU/AntCordinatedSelect";
import LargeLoader from "../../utils/LargeLoader";
import Loader from "../../utils/Loader";
const Cable = () => {
  const [purchaseCable, { isLoading, error }] = useVtuCableTvMutation();
  const [verifyUser, { isLoading: isVerifying, error: verifyError }] =
    useVtuVerifyUserMutation();
  const [amount, setAmount] = useState(
    Number(
      CableVariations[CableData[0].value][0].label.split("₦")[1].split("+")[0]
    )
  );
  const [accName, setAccName] = useState("");
  const [provider, setProvider] = useState(CableVariations[CableData[0].value]);
  const [bundle, setBundle] = useState(CableVariations[CableData[0].value][0]);
  const [verifyErr, setVerifyErr] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [purchaseErr, setPurchaseErr] = useState(false);
  const VerifyUserName = async (provider, values, bundle) => {
    const res = await verifyUser({
      service_id: provider,
      customer_id: values.smartcardNumber,
      variation_id: bundle,
    });
    if (res.data) {
      setAccName(res.data.data.customer_name);
    }
    if (res.error) {
      setVerifyErr(true);
    }
  };
  const onSubmit = async (values, actions) => {
    console.log("rendered");
    const res = await purchaseCable({
      smartCard_number: values.smartcardNumber,
      phone: values.phone,
      amount: amount,
      variation_id: bundle,
      service_id: provider,
    });
    if (res.data) {
      actions.resetForm();
      setPurchaseSuccess(true);
    }
    if (res.error) {
      setPurchaseErr(true);
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
      smartcardNumber: "",
    },
    validationSchema: CablePurchaseSchema,
    onSubmit,
  });
  console.log(values);
  //   const handleProvider = (value) => setProvider(value.value);
  console.log(bundle, provider);

  return (
    <>
      <SuccessModal
        alter={purchaseSuccess}
        setAlter={() => setPurchaseSuccess(false)}
      />
      <ErrorModal
        alter={verifyErr}
        message={verifyError?.message}
        setAlter={() => setVerifyErr(false)}
      />
      <ErrorModal
        alter={purchaseErr}
        message={error?.message}
        setAlter={() => setPurchaseErr(false)}
      />
      {isVerifying && <LargeLoader />}
      <main className="flex flex-col items-center justify-center">
        <div className="w-[60%] m-auto flex flex-col justify-center items-center p-[1rem] rounded-[5px] bg-gray-50">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
          >
            <label htmlFor="nuban" className="block mb-[1rem]">
              Provider:
            </label>
            <AntCordinatedSelect
              data={CableData}
              variations={CableVariations}
              bundle={bundle}
              provider={provider}
              setProvider={setProvider}
              setBundle={setBundle}
              setAmount={setAmount}
              title="Available Bundles"
            />
            <div className="my-[0.5rem]">
              <label htmlFor="smartcardNumber" className="block mb-[0.5rem]">
                smartcard number:
              </label>
              <input
                type="number"
                id="smartcardNumber"
                className={
                  errors.smartcardNumber
                    ? "p-[5px] border-solid text-[1rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "p-[5px] border-solid text-[1rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                  if (!errors.smartcardNumber && touched.smartcardNumber) {
                    VerifyUserName(provider, values, bundle);
                  }
                }}
                value={values.smartcardNumber}
                required
              />
              {errors.smartcardNumber && touched.smartcardNumber && (
                <p className="text-red-600">{errors.smartcardNumber}</p>
              )}
            </div>
            <label htmlFor="name" className="block my-[0.5rem]">
              Account Name:
            </label>
            <input
              type="text"
              id="name"
              disabled
              className="p-[5px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              value={accName}
              required
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
                    ? "p-[5px] border-solid text-[1rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "p-[5px] border-solid text-[1rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
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
              className="p-[5px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              value={amount}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white"
            >
              {isLoading && <Loader />} Proceed
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Cable;
