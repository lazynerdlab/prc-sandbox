import { Tabs } from "antd";
import Profile from "./profile";
import ChangePassword from "./changePassword";
import ForgetPin from "./forgetPin";
import ResetBiometrics from "./resetBiometrics";
const Services = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      style={{ paddingLeft: "1rem" }}
      items={[
        {
          label: `Profile`,
          key: "1",
          children: <Profile/>,
        },
        {
          label: `Change Password`,
          key: "2",
          children: <ChangePassword/>,
        },
        {
          label: `Forget Transaction Pin`,
          key: "3",
          children: <ForgetPin/>,
        },
        {
          label: `Reset Biometrics`,
          key: "4",
          children: <ResetBiometrics/>,
        },
      ]}
    />
  );
};

export default Services;
