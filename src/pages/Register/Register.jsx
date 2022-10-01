import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/user";
import Button from "@mui/material/Button";
import { state, LGA } from "../../assets/Data";
import Img from "../../assets/gel-sanitizer.jpg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [Cpwd, setCPwd] = useState("");
  const [city, setCity] = useState("");
  const [lga, setLga] = useState("");
  const [phone, setPhone] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    console.log(city);
    userRef.current.focus();
  }, [city]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(login({ name: user, email: email }));
      setUser("");
      setPwd("");
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className="LoginContainer">
      <main className="Loginsection">
        <div className="side-img">
          <img className="img" src={Img} alt="" />
        </div>
        <div className="LoginForm">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} className="form">
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

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
            <div className="select-grp">
              <label htmlFor="state">State:</label>
              <select
                name="state"
                id="state"
                placeholder="state"
                onChange={(e) => setCity(e.value)}
              >
                {state.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
              <label htmlFor="lga">State:</label>
              <select name="lga" id="lga" onChange={(e) => setLga(e.value)}>
                {city && LGA.city.map((e) => <option value={e}>{e}</option>)}
              </select>
            </div>
            <Button
              variant="contained"
              size="small"
              color="success"
              className="signIn"
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
