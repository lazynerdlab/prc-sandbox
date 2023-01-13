import { useState } from "react";
import { Button, message, Steps } from "antd";
import InputPassword from "./InputPassword";

const ResetBiometrics = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "",
      content: <InputPassword current={current} setCurrent={setCurrent} />,
    },
    {
      title: "",
      content: "Second-content",
    },
    {
      title: "",
      content: "Last-content",
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      {/* <div className="steps-action m-auto">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div> */}
    </>
  );
};

export default ResetBiometrics;
