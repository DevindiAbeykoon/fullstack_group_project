import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import StaffLogin from "./pages/shenali/StaffLogin";
import StaffDetails from "./pages/Details";
import Admin from "./pages/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackForm from "./pages/feedbackform";
import Feedbacks from "./pages/feedbacksubmission";
import Addroom from "./pages/Addroom";
import Addstaff from "./pages/Addstaff";
import Booking from "./pages/Booking";
import Bookroom from "./pages/Bookroom";
import FormP from "./pages/Cleaning";
import Details from "./pages/Details";
import Reservation from "./pages/Reservation";
import Roompage from "./pages/Roompage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>

          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>

          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/detail" element={<StaffDetails />}></Route>
          <Route exact path="/feedback" element={<FeedbackForm />}></Route>
          <Route exact path="/feedbacks" element={<Feedbacks />}></Route>
          <Route exact path="/submissions" element={<Feedbacks />}></Route>

          <Route exact path="/addroom" element={<Addroom />}></Route>
          <Route exact path="/addstaff" element={<Addstaff />}></Route>
          <Route exact path="/booking" element={<Booking />}></Route>
          <Route exact path="/bookroom" element={<Bookroom />}></Route>
          <Route exact path="/cleaningform" element={<FormP />}></Route>
          <Route exact path="/clean" element={<Details />}></Route>
          <Route exact path="/reservation" element={<Reservation />}></Route>
          <Route exact path="/submissions" element={<Feedbacks />}></Route>
          <Route exact path="/roompage" element={<Roompage />}></Route>

          {/* <Route exact path="/form" element={<StaffForm />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
