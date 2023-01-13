import { Select } from "antd";

// const provinceData = ["Zhejiang", "Jiangsu"];
// const cityData = {
//   mtn: [
//     { label: "MTN Data 500MB – 30 Days-₦159", value: "500" },
//     { label: "MTN Data 1GB – 30 Days-₦289", value: "M1024" },
//     { label: "MTN Data 2GB – 30 Days-₦579", value: "M2024" },
//     { label: "MTN Data 3GB – 30 Days-₦869", value: "3000" },
//     { label: "MTN Data 5GB – 30 Days-₦1449", value: "5000" },
//     { label: "MTN Data 6GB – 7 Days-₦1499", value: "mtn-20hrs-1500" },
//     { label: "MTN Data 10GB – 30 Days-₦2899", value: "10000" },
//     { label: "MTN Data 30GB – 30 Days-₦4979", value: "mtn-30gb-8000" },
//     { label: "MTN Data 40GB – 30 Days-₦9899", value: "mtn-40gb-10000" },
//     { label: "MTN Data 75GB – 30 Days-₦14979", value: "mtn-75gb-15000" },
//   ],
//   airtel: [
//     { label: "Airtel Data 750MB – 14 Days-₦545", value: "airt-550" },
//     { label: "Airtel Data 1GB – 1 Day-₦329", value: "airt-330x" },
//     { label: "Airtel Data 1.5GB – 30 Days-₦1079", value: "airt-1100" },
//     { label: "Airtel Data 2GB – 30 Days-₦1289", value: "airt-1300" },
//     { label: "Airtel Data 3GB – 30 Days-₦1639", value: "airt-1650" },
//     { label: "Airtel Data 4.5GB – 30 Days-₦2189", value: "airt-2200" },
//     { label: "Airtel Data 6GB – 7 Days-₦1700", value: "airt-1650-2" },
//     { label: "Airtel Data 10GB – 30 Days-₦3289", value: "airt-3300" },
//     { label: "Airtel Data 20GB – 30 Days-₦5489", value: "airt-5500" },
//     { label: "Airtel Data 40GB – 30 Days-₦10799", value: "airt-11000" },
//   ],
//   glo: [
//     { label: "Glo Data 1GB – 5 Nights-₦100", value: "glo100x" },
//     { label: "Glo Data 1.25GB – 1 Day(Sunday)-₦200", value: "glo200x" },
//     { label: "Glo Data 1.35GB – 14 Days-₦489", value: "G500" },
//     { label: "Glo Data 2.9GB – 30 Days-₦1000", value: "G1000" },
//     { label: "Glo Data 5.8GB – 30 Days-₦1949", value: "G2000" },
//     { label: "Glo Data 7.7GB – 30 Days-₦2500", value: "G2500" },
//     { label: "Glo Data 10GB – 30 Days-₦2949", value: "G3000" },
//     { label: "Glo Data 13.25GB – 30 Days-₦3889", value: "G4000" },
//     { label: "Glo Data 18.25GB – 30 Days-₦4849", value: "G5000" },
//     { label: "Glo Data 29.5GB – 30 Days-₦7799", value: "G8000" },
//     { label: "Glo Data 50GB – 30 Days-₦9899", value: "glo10000" },
//   ],
//   etisalat: [
//     { label: "9mobile Data 1GB – 30 Days-₦1000", value: "9MOB1000" },
//     { label: "9mobile Data 2.5GB – 30 Days-₦2000", value: "9MOB34500" },
//     { label: "9mobile Data 11.5GB – 30 Days-₦8000", value: "9MOB8000" },
//     { label: "9mobile Data 15GB – 30 Days-₦10000", value: "9MOB5000" },
//   ],
// };

const AntCordinatedSelect = ({
  data,
  variations,
  bundle,
  setBundle,
  setProvider,
  setAmount,
  provider,
  title,
}) => {
  //   const [cities, setCities] = useState(variations[data[0]]);
  //   const [secondCity, setSecondCity] = useState(variations[data[0]]);

  const handleDataChange = (values) => {
    setProvider(variations[values]);
    setBundle(variations[values][0]);
    setAmount(Number(variations[values][0].label.split("₦")[1].split("+")[0]));
  };

  const onDataChange = (value, obj) => {
    setBundle(value);
    setAmount(Number(obj.label.split("₦")[1].split("+")[0]));
  };

  return (
    <>
      <Select
        defaultValue={data[0]}
        onChange={handleDataChange}
        options={data}
      />
      <label className="block my-[0.5rem]">{title}:</label>
      <Select value={bundle} onChange={onDataChange} options={provider} />
    </>
  );
};

export default AntCordinatedSelect;
