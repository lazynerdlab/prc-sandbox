import airtel from "../../assets/airtel.jpg";
import mtn from "../../assets/mtn.jpg";
import glo from "../../assets/glo.jpg";
import etisalat from "../../assets/9mobile.jpg";
import AntSelect from "./AntSelect";
import { useState } from "react";
const Airtime = () => {
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
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState(data[0].value);

  const handleProvider = (value) => setProvider(value.value);
  console.log(provider);

  return (
    <main className="flex flex-col items-center justify-center pt-[1rem]">
      <div className="w-[40%] m-auto flex flex-col justify-center items-center p-[1rem] pt-[2rem] rounded-[5px] bg-gray-50">
        <form
          className="w-full flex flex-col justify-stretch align-stretch relative"
          // onSubmit={handleSubmit}
        >
          <label htmlFor="nuban" className="block mb-[1rem]">
            Provider:
          </label>
          <AntSelect data={data} handleChange={handleProvider} />

          <label htmlFor="narration" className="block mb-[1rem]">
            Phone Number:
          </label>
          <input
            type="number"
            id="narration"
            className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
          <label htmlFor="amount" className="block mb-[1rem]">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            className="border-solid text-[1.2rem] border-b-[2px] w-full m-auto mb-[1rem] focus:outline-none focus:border-primary-bold"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
          <button className="bg-blue-600 mb-[1rem] mt-[1rem] border-none p-[1rem] rounded-[5px] text-white">
            Proceed
          </button>
        </form>
      </div>
    </main>
  );
};

export default Airtime;
