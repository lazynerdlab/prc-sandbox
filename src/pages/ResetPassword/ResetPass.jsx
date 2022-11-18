import "./ResetPass.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("http://localhost:7000/api/resetpassword", {
        email: email,
      });
      setEmail("");
      console.log(res);
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="reset">
      {success && (
        <div>check your email address for a link to reset your password</div>
      )}
      {!success && (
        <>
          <div className="info">
            Enter the email address associated with your account and we'll send
            you a link to reset your Password
          </div>
          <form className="resetForm">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <Button
              variant="contained"
              size="small"
              color="success"
              className="continue"
              onClick={handleSubmit}
            >
              continue
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default ResetPass;
