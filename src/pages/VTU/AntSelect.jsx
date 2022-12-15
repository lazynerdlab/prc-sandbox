import { Select } from "antd";

// const handleChange = (value) => {
//   console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
// };

// const data = [
//     {
//       value: 'jack',
//       label: 'Jack (100)',
//     },
//     {
//       value: 'lucy',
//       label: 'Lucy (101)',
//     },
//   ]

const AntSelect = ({ data, handleChange }) => (
  <Select
    labelInValue
    defaultValue={data[0]}
    // style={{ width: 200 }}
    onChange={handleChange}
    options={data}
  />
);

export default AntSelect;
