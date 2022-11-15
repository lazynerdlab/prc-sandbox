import "../../pages/ResetPassword/ResetPass.scss";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { Apis } from "../../utils/fetchData";
const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email & pwd & cpwd) {
      if (pwd === cpwd) {
        try {
          await Apis("post", "/resetpassword", {
            password: pwd,
            email: search,
          });
          setEmail("");
          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  return (
    <div className="reset">
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
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={email}
          required
        />
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          id="cpassword"
          onChange={(e) => setCpwd(e.target.value)}
          value={cpwd}
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

export default ForgotPass;
