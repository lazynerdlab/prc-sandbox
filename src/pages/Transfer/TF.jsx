// import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import OtherTransfer from "./OtherTransfer";
import { notification } from "antd";
import Transfer from "./Transfer";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const TransferTabs = () => {
  useEffect(() => {
    notification.open({
      message: "Notification",
      description:
        "It seems you have not set up your Biometrics Options,Please go to the self services section to set up your biometircs option to be able to initiate Transfer.",
    });
    console.log("rendered");
  }, []);

  return (
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
};
export default TransferTabs;
