import AntSelect from "../VTU/AntSelect";
import ErrorModal from "../../Components/Modals/errorModal";
import SuccessModal from "../../Components/Modals/successModal";
import Loader from "../../utils/Loader";
import LargeLoader from "../../utils/LargeLoader";
import { ElectricityData, ServiceType } from "./electricityinfo";
import { useState } from "react";
import { useFormik } from "formik";
import { ElectricityPurchaseSchema } from "../../utils/Schemas/ElectricityPurshaseSchema";
import {
  useVtuElectricityMutation,
  useVtuVerifyUserMutation,
} from "../../features/api/vtuApiSlice";
const Electricity = () => {
  const [provider, setProvider] = useState(ElectricityData[0].value);
  const [servicetype, setServiceType] = useState(ServiceType[0].value);
  const [accName, setAccName] = useState("");
  const [verifyErr, setVerifyErr] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [purchaseErr, setPurchaseErr] = useState(false);
  const [purchaseElectricity, { isLoading, error }] =
    useVtuElectricityMutation();
  const [verifyUser, { isLoading: isVerifying, error: verifyError }] =
    useVtuVerifyUserMutation();

  const handleProvider = (value) => setProvider(value.value);
  const handleServiceType = (value) => setServiceType(value.value);
  const VerifyUserName = async (provider, values, bundle) => {
    const res = await verifyUser({
      service_id: provider,
      customer_id: values.meternumber,
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
    const res = await purchaseElectricity({
      meter_number: values.meternumber,
      phone: values.phone,
      amount: values.amount,
      variation_id: servicetype,
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
      amount: "",
      meternumber: "",
    },
    validationSchema: ElectricityPurchaseSchema,
    onSubmit,
  });
  console.log(values);

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
        <div className="w-[50%] m-auto flex flex-col justify-center items-center p-[1rem] rounded-[5px] bg-gray-50">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
          >
            <label htmlFor="provider" className="block mb-[0.5rem]">
              Provider:
            </label>
            <div className="flex justify-between">
              <div className="grow w-full pr-[0.2rem]">
                <AntSelect
                  data={ElectricityData}
                  handleChange={handleProvider}
                  width="100%"
                />
              </div>
              <AntSelect data={ServiceType} handleChange={handleServiceType} />
            </div>
            <div className="my-[0.5rem]">
              <label htmlFor="meternumber" className="block mb-[0.5rem]">
                meter number:
              </label>
              <input
                type="number"
                id="meternumber"
                className={
                  errors.meternumber
                    ? "border-solid text-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                  if (!errors.meternumber && touched.meternumber) {
                    VerifyUserName(provider, values, servicetype);
                  }
                }}
                required
              />
              {errors.meternumber && touched.meternumber && (
                <p className="text-red-600">{errors.meternumber}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Account Name"
              id="name"
              disabled
              className="border-solid text-[1.2rem] my-[1rem] border-b-[2px] w-full m-auto mb-[0.5rem] focus:outline-none focus:border-primary-bold"
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
                    ? "border-solid text-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "border-solid text-[0.5rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
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
              {isLoading && <Loader />} Proceed
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Electricity;
