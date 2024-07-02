import Form from "./components/Form";
import Navbar from "./components/NavBar";
import { useState } from "react";

function App() {

  const [users, setUsers] = useState({
    name: 'John Doe',
    age: 30,
    job: 'Developer job',
  });
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div>
          <Form label="Name Is: " users={users.name} />
        </div>
      </div>
    </div>
  );
}

export default App;
