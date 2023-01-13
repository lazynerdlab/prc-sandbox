import LargeLoader from "../../utils/LargeLoader";
import SearchBanks from "../../utils/ComboBox";
import { Banks } from "../../features/flutterwave/Banks";
import { useRef, useState, useEffect } from "react";
import { useFormik } from "formik";
import Loader from "../../utils/Loader";
import {
  useFetchAccountNameMutation,
  useOthertransferMutation,
} from "../../features/api/flutterwaveApiSlice";
import ErrorModal from "../../Components/Modals/errorModal";
import { otherTransferSchema } from "../../utils/Schemas/OtherBankTransferSchema";
import SuccessModal from "../../Components/Modals/successModal";
const OtherTransfer = () => {
  const [fetchAccountName, { isLoading: isVerifying, error: accNameError }] =
    useFetchAccountNameMutation();
  const [initiateTransfer, { isLoading, error }] = useOthertransferMutation();
  const nubanRef = useRef();
  useEffect(() => {
    nubanRef.current.focus();
  }, []);
  const [bankname, setBankname] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accNameErr, setAccNameErr] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [transferErr, setTransferErr] = useState(false);
  const onSubmit = async (values, actions) => {
    const res = await initiateTransfer({
      bankCode: bankname.code,
      accountNumber: values.nuban.toString(),
      value: Number(values.amount.split(",").join("")),
      narration: values.narration,
    });
    if (res.data) {
      actions.resetForm();
      setTransferSuccess(true);
    }
    if (res.error) {
      setTransferErr(true);
    }
  };
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setErrors,
  } = useFormik({
    initialValues: {
      nuban: "",
      amount: "0.00",
      narration: "",
    },
    validationSchema: otherTransferSchema,
    onSubmit,
  });
  const generateAccountName = async (accountNumber, bankCode) => {
    if (!errors.nuban && touched.nuban) {
      console.log(accountNumber, bankCode);
      const res = await fetchAccountName({ accountNumber, bankCode });
      if (res.data) {
        setAccountName(res.data.accountName);
      }
      if (res.error) {
        setAccNameErr(true);
      }
    }
  };
  return (
    <>
      <ErrorModal
        alter={accNameErr}
        message={accNameErr?.message}
        setAlter={() => setAccNameErr(false)}
      />
      <ErrorModal
        alter={transferErr}
        message={transferErr?.message}
        setAlter={() => setTransferErr(false)}
      />
      <SuccessModal
        alter={transferSuccess}
        setAlter={() => setTransferSuccess(false)}
      />
      {isVerifying && <LargeLoader />}
      <main className="flex flex-col items-center justify-center">
        <div className="w-[40%] md:w-[60%] m-auto flex flex-col justify-center items-center p-[1rem] pt-[2rem] rounded-[5px] bg-gray-50">
          <form
            className="w-full flex flex-col justify-stretch align-stretch relative"
            onSubmit={handleSubmit}
          >
            <div className="my-[0.5rem]">
              <label htmlFor="nuban" className="block mb-[1rem]">
                Destination Account:
              </label>
              <input
                type="text"
                id="nuban"
                className={
                  errors.nuban
                    ? "p-[8px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "p-[8px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                ref={nubanRef}
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                  if (!errors.nuban && bankname?.code && values.nuban) {
                    generateAccountName(values.nuban, bankname.code);
                  }
                }}
                value={values.nuban}
                required
              />
              {errors.nuban && touched.nuban && (
                <p className="text-red-600">{errors.nuban}</p>
              )}
            </div>

            <label className="block mb-[1rem]">BankName:</label>
            <SearchBanks
              Array={Banks}
              selected={bankname}
              setSelected={setBankname}
              externalFunc={(code) => generateAccountName(values.nuban, code)}
            />

            <input
              type="text"
              disabled
              id="accountname"
              className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
              placeholder="AccountName"
              value={accountName}
              required
            />

            <div className="my-[0.5rem]">
              <label htmlFor="amount" className="block mb-[1rem]">
                Amount:
              </label>
              <input
                type="text"
                id="amount"
                className={
                  errors.amount
                    ? "p-[8px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "p-[8px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={(e) => {
                  if (isNaN(Number(e.target.value.split(",").join("")))) return;
                  handleChange(e);
                }}
                onBlur={(e) => {
                  handleBlur(e);
                }}
                value={Number(
                  values.amount.split(",").join("")
                ).toLocaleString()}
                required
              />
              {errors.amount && touched.amount && (
                <p className="text-red-600">{errors.amount}</p>
              )}
            </div>

            <div className="my-[0.5rem]">
              <label htmlFor="narration" className="block mb-[1rem]">
                Narration:
              </label>
              <input
                type="text"
                id="narration"
                className={
                  errors.narration
                    ? "p-[8px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-red-600"
                    : "p-[8px] border-solid text-[1.2rem] border-b-[2px] w-full m-auto focus:outline-none focus:border-primary-bold"
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.narration}
                required
              />
              {errors.narration && touched.narration && (
                <p className="text-red-600">{errors.narration}</p>
              )}
            </div>
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
export default OtherTransfer;
