import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Transfer from "./pages/Transfer/Transfer";
import Token from "./pages/redirect_Pages/VerifyUser";
import Register from "./pages/Register/Register";
import ResetPass from "./pages/ResetPassword/ResetPass";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPass />} />
      <Route path="/userauth/*" element={<Token />} />
      {/* <Route path="/resetpassword/*" element={<Token />} /> */}
    </Routes>
  );
}

export default App;
