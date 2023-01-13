import { Tabs } from "antd";
import FundModal from "../../Components/Modals/FundModal";
import USSD from "./ussd";
const Fund = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      style={{ paddingLeft: "1rem" }}
      items={[
        {
          label: `card`,
          key: "1",
          children: <FundModal />,
        },
        {
          label: `ussd`,
          key: "2",
          children: <USSD />,
        },
      ]}
    />
  );
};

export default Fund;
