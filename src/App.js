import "./App.css";
import Signin from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import SuccessScreen from "./pages/SuccessScreen";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/home" element={<Homepage />} />
        <Route exact path="/registered" element={<SuccessScreen />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
