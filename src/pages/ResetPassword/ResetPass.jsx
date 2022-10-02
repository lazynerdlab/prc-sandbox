import "./ResetPass.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/sanitizerlogo.png";
import Button from "@mui/material/Button";
const ResetPass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setEmail("");
      navigate("/login");
    } catch (err) {}
  };
  return (
    <div className="reset">
      <div className="header-img">
        <img src={Img} className="head-img" />
      </div>
      <div className="info">
        Enter the email address associated with your account and we'll send you
        a link to reset your Password
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
    </div>
  );
};

export default ResetPass;
