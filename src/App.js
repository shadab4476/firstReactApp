import Form from "./components/Form";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const [users, setUsers] = useState({
    name: 'John Doe',
    age: 30,
    job: 'Developer job',
  });
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div >

      </BrowserRouter>
    </>
  );
}

export default App;
