import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/user";
import Button from "@mui/material/Button";
import axios from "../../api/axios";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [Cpwd, setCPwd] = useState("");
  const registerUrl = "/register";
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please input username");
      return;
    }
    if (pwd !== Cpwd) {
      alert("Password and confirm password doesn't match");
      return;
    }
    if (user && email && pwd && Cpwd) {
      try {
        const res = await axios.post(
          registerUrl,
          { username: { user }, email: { email }, password: { pwd } },
          { headers: { "content-Type": "application/json" } }
        );
        dispatch(login({ name: user, email: email }));
        setUser("");
        setPwd("");
        setCPwd("");
        setEmail("");
        navigate("/");
      } catch (err) {
        if (err.response) {
          alert("server error occured");
        }
        if (err.request) {
          alert("Network error occured");
        }
      }
    } else {
      alert("Please Input all required Field");
    }
  };
  return (
    <div className="LoginContainer">
      <main className="Loginsection">
        <div className="LoginForm">
          <h1>Sign Up</h1>
          <form className="form">
            <label htmlFor="firstname">Username:</label>
            <input
              type="text"
              id="firstname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <label htmlFor="Cpassword">Confirm Password:</label>
            <input
              type="password"
              id="Cpassword"
              onChange={(e) => setCPwd(e.target.value)}
              value={Cpwd}
              required
            />
            <Button
              variant="contained"
              size="small"
              color="success"
              className="signIn"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </form>
          <p>
            Already have an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <div
                className="router"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </div>
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
