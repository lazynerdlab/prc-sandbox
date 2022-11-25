import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import useActions from "../hookActions";
import { fundBalance } from "../../features/actions.balance";
import { randomRef } from "./TransactRef";
const FlutterWave = ({ amount, email, name }) => {
  const { dispatch, state } = useActions();
  const config = {
    public_key: "FLWPUBK_TEST-ebda4d502301b0ddb917d2f7d75c04b5-X",
    tx_ref: randomRef(name),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "E-wallet Funds",
      description: "Fund E-wallet",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handlePayment = useFlutterwave(config);
  console.log(config);
  return (
    <button
      className="bg-blue-700 mb-[1rem] border-none p-[1rem] rounded-[5px] text-white"
      type="submit"
      onClick={() => {
        if (amount && amount >= 1) {
          handlePayment({
            callback: (response) => {
              console.log(response);
              const { transaction_id, trx_ref, amount } = response;
              const payload = {
                id: transaction_id,
                trx_ref: trx_ref,
                value: amount,
                email: state.user.value.email,
              };
              dispatch(fundBalance(payload));
              closePaymentModal();
            },
            onClose: () => {},
          });
        }
      }}
    >
      Pay
    </button>
  );
};

export default FlutterWave;
