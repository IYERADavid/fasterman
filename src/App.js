import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";
import Navbar from "./appcompenents/navbar";
import Signup from "./appcompenents/signup"
import Login from "./appcompenents/login";
import Home from "./appcompenents/home";
import Service from "./appcompenents/service";
import Logout from "./appcompenents/logout"
import Admin from "./appcompenents/admin";

function App() {
  const user_id = localStorage.getItem("user_id");
  const [Currentuser, setCurrentuser] = useState(user_id);

  return (
    <>
      {Currentuser && <Navbar user_id={Currentuser} />}
      <Router>
        <Routes>
          <Route exact path='/' element={ Currentuser?
          <Home user_id={Currentuser} /> :<Navigate to="/login" replace />}></Route>
          <Route exact path='/request_service' element={Currentuser?
          <Service user_id={Currentuser}/>:<Navigate to="/login" replace />}></Route>
          <Route exact path='/login' element={
          < Login setCurrentuser={setCurrentuser}/>}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/logout' element={<Logout />}></Route>
          <Route exact path="/admin/page/only" element={<Admin />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
