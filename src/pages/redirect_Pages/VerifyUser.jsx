import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyUser } from "../../utils/VerifyUser.utils";
const Token = () => {
  const { hash, search } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const Verified = verifyUser(hash, search);
    if (Verified) {
      navigate("/Login");
    } else if (!Verified) {
      alert("An error Occured");
    }
  }, []);
  return <div>You will be redirected To Login Page Soon</div>;
};

export default Token;
