import "./Login.scss";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/user";
import Button from "@mui/material/Button";
import axios from "../../api/axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const LoginUrl = "";
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user && email && pwd) {
      try {
        const res = await axios.post(
          LoginUrl,
          {
            username: { user },
            email: { email },
            password: { pwd },
          },
          { headers: { "content-Type": "application/json" } }
        );
        const data = res.data;
        dispatch(login({ name: data.username, email: data.email }));
        setUser("");
        setPwd("");
        setEmail("");
        navigate("/");
      } catch (err) {
        if (err.request) {
          alert("Network error occured");
        }
        if (err.response) {
          if (err.status >= 400 && err.status < 500) {
            alert("email or userName incorrect");
          } else {
            alert("server error occured");
          }
        }
      }
    } else {
      alert("please input all required fields");
      return;
    }
  };

  return (
    <div className="LoginContainer">
      <main className="Loginsection">
        <div className="LoginForm">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
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
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              value={pwd}
              required
            />
            <Button
              variant="contained"
              size="small"
              color="success"
              className="signIn"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <div
                className="router"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </div>
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
