import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/sanitizerlogo.png";
import Lady from "../../assets/surface-sanitizer-lady.jpg";
import Button from "@mui/material/Button";
import { logout } from "../../features/user";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  return (
    <main>
      <nav className="nav">
        <div className="logo">
          <img src={Logo} className="logo-img" />
        </div>
        {user.name ? (
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Sign out
          </Button>
        ) : (
          <div className="btn-grp">
            <Button
              variant="contained"
              size="small"
              color="success"
              className="signIn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              onClick={() => {
                navigate("/register");
              }}
            >
              Sign Up
            </Button>
          </div>
        )}
      </nav>
      <div className="content">
        <div className="flex-1">
          <h1 className="content-header">WE PROTECT WHAT WE LOVE</h1>
          <p className="content-text">
            welcome to the number #1 antiseptic in the world. 2sure protects
            from up to 100 illness caausing germs and has helped protect
            families from illness for decades
          </p>
        </div>
        <div className="flex-2">
          <img src={Lady} className="content-img" />
        </div>
      </div>
    </main>
  );
};

export default Home;
