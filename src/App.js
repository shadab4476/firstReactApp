import Form from "./components/Form";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [userInfo, setUserInfo] = useState({ name: "........." });
  useEffect(() => {
    try {
      axios.post("http://localhost:8000/api/user-info").then((res) => {
        setUserInfo(res.data)
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar userInfo={userInfo.name} />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Form formType="login" />} />
            <Route path="/register" element={<Form formType="register" />} />
          </Routes>
        </div >

      </BrowserRouter>
    </>
  );
}

export default App;
