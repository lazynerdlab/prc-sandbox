import "./Modals.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Modals = ({ action, event, display, type }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const user = useSelector((state) => state.user.value);
  // const payload = {
  //   type: type,
  //   value: parseInt(value),
  //   senderEmail: user.email,
  //   receiverEmail: email
  // };
  const payload =
    action === "Transfer"
      ? {
          type: type,
          value: parseInt(value),
          senderEmail: user.email,
          receiverEmail: email,
        }
      : {
          type: type,
          value: parseInt(value),
          receiverEmail: user.email,
        };
  return (
    <div className="modal" style={{ display: display ? "block" : "none" }}>
      {/* {err && <h5 className="err">{err}</h5>} */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(payload);
          if (action !== "Transfer" && value) {
            dispatch(event(payload));
          } else setErr("please Input all required Fields");
          if (action === "Transfer" && value && email) {
            dispatch(event(payload));
          } else setErr("please Input all required Fields");
        }}
      >
        <div className="modal-flex">
          <label htmlFor="input">Amount:</label>
          <input
            className="input"
            type="number"
            min="1"
            required
            value={value}
            onChange={(e) => {
              if (e.target.value >= 1 && e.target.value.charAt(0) !== "0") {
                setValue(e.target.value);
                return;
              }
              setValue("0.00");
            }}
          />
        </div>
        {action === "Transfer" && (
          <div className="modal-flex">
            <label htmlFor="input">Receiver mail:</label>
            <input
              className="Emailinput"
              type="email"
              value={email}
              required
              onChange={(e) => {
                if (e.target.value) {
                  setEmail(e.target.value);
                  return;
                }
              }}
            />
          </div>
        )}
        <button type="submit">{action}</button>
      </form>
    </div>
  );
};

export default Modals;
