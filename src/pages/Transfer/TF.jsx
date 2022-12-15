// import { Routes, Route } from "react-router-dom";
import OtherTransfer from "./OtherTransfer";
import Transfer from "./Transfer";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const TransferTabs = () => (
  <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    style={{ padding: "1rem" }}
    items={[
      {
        label: `Transfer To E-Wallet`,
        key: "1",
        children: <Transfer />,
      },
      {
        label: `Transfer To Other Banks`,
        key: "2",
        children: <OtherTransfer />,
      },
      {
        label: `Transfer To Saved Beneficiary`,
        key: "3",
        children: `Content of Tab Pane 3`,
      },
    ]}
  />
);
export default TransferTabs;
