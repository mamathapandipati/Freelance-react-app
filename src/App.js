import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap.bundle.min.js / bootstrap.bundle.js";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import GetUserDeatils from "./components/GetUserDeatils";
import CraeteUser from "./components/CraeteUser";
import Register from "./components/Register";
import LoginPage from "./components/LoginPage";
import SearchUser from "./components/SearchUser";
import UpdateUser from "./components/UpdateUser";
import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import { createContext, useState } from "react";
import MyProfile from "./components/MyProfile";

import IndProfile from "./components/IndProfile";
import EditProfile from "./components/EditProfile";
import ClientSignUp from "./components/EmployerSignUp";
import ChangePassword from "./components/ChangePassword";
import Message from "./components/Message";
import "react-toastify/dist/ReactToastify.css";
import EmployerSignUp from "./components/EmployerSignUp";
import SignUp from "./components/Signup";
import AboutUs from "./components/AboutUs";
import WhyFreelance from "./components/WhyFreelance";
import BrowseJobs from "./components/BrowseJobs";
import PostJob from "./components/PostJob";
import ApplyJob from "./components/ApplyJob";
import Main from "./components/Main";
import ApplicantDetails from "./components/ApplicantDetails";
import MySavedJobs from "./components/MySavedJobs";
import SaveJobs from "./components/SaveJobs";
export const store = createContext();
export const UserContext = createContext();
function App() {
  const [token, setToken] = useState(null);
  const [jobs, setJobs] = useState([]);
  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <Routes>
          <Route path="/getall" element={<GetUserDeatils />}></Route>
          <Route
            path="/indprofile/:username/:role/:email/:mobile/:price/:skills/:id"
            element={<IndProfile />}
          ></Route>{" "}
          <Route
            path="/savejobs"
            element={
              <UserContext.Provider value={[jobs, setJobs]}>
                <SaveJobs />
              </UserContext.Provider>
            }
          ></Route>
          <Route path="/apply" element={<ApplyJob />}></Route>
          <Route path="/applicant" element={<ApplicantDetails />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/createUser" element={<CraeteUser />}></Route>
          <Route path="/why" element={<WhyFreelance />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/search" element={<SearchUser />}></Route>
          <Route path="/update/:id" element={<UpdateUser />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/myprofile" element={<MyProfile />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
          <Route path="/employersignup" element={<EmployerSignUp />}></Route>
          <Route path="/mysavedjobs" element={<MySavedJobs />}></Route>
          <Route path="/message/:id" element={<Message />}></Route>
          <Route path="/browsejobs" element={<BrowseJobs />}></Route>
          <Route path="/radio" element={<SignUp />}></Route>
          <Route path="/postjob" element={<PostJob />}></Route>
          <Route path="/changepassword" element={<ChangePassword />}></Route>
        </Routes>
      </store.Provider>
    </div>
  );
}

export default App;
