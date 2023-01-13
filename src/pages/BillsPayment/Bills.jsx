import { Tabs } from "antd";
import Cable from "./Cable";
import Electricity from "./Electricity";
const Bills = () => (
  <Tabs
    defaultActiveKey="1"
    style={{ paddingLeft: "1rem" }}
    items={[
      {
        label: `Cable Tv`,
        key: "1",
        children: <Cable />,
      },
      {
        label: `Electricity`,
        key: "2",
        children: <Electricity />,
      },
    ]}
  />
);
export default Bills;
