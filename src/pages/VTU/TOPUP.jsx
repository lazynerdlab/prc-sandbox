import { Tabs } from "antd";
import Airtime from "./Airtime";
import DataBundle from "./DataBundle";
const onChange = (key) => {
  console.log(key);
};
const TOPUP = () => (
  <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    style={{ padding: "1rem" }}
    items={[
      {
        label: `Airtime`,
        key: "1",
        children: <Airtime />,
      },
      {
        label: `DATA`,
        key: "2",
        children: <DataBundle />,
      },
    ]}
  />
);
export default TOPUP;
