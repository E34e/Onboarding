import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OnboardingMainPage from "./jvd_backup 4-11-22/FreshOnboarding/OnboardingMainPage";
// import StudentEDucationDetails from "./jvdapplication/StudentEDucationDetails";
import JvdApplication from "./jvd_backup 4-11-22/JVD_Application/jvdApplication";
import StudentDetails from "./jvd_backup 4-11-22/JVD_Application/StudentDetails";
import StudentEDucationDetails from "./jvd_backup 4-11-22/JVD_Application/StudentEDucationDetails";
import PreRegistartion from "./jvd_backup 4-11-22/PreRegistration/PreRegistration";
// import Tabs from "./jvdapplication/Tabs";
import Dashboard from "./ScholarshipRenewal/Components/Dashboard/Dashboard"

import RenewalStatistics from "./ScholarshipRenewal/Components/Dashboard/RenewalStastics";
import LoginPage from "./ScholarshipRenewal/Components/Login/LoginPage";
import NotToPromote from "./ScholarshipRenewal/Components/NotToPromote";
import Studentpromotedata from "./ScholarshipRenewal/Components/StudentPromoteData";
import Uploadsupportives from "./ScholarshipRenewal/Components/UploadSupportives/UploadSupportives";

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route
        path="/dashboard"
        exact={true}
        element={<Dashboard></Dashboard>}
      />
       <Route
        path="/renewal"
        exact={true}
        element={<RenewalStatistics></RenewalStatistics>}
      />
      <Route
        path="/uploadsupportives"
        element={<Uploadsupportives></Uploadsupportives>}
      ></Route>
      <Route
        path="/promotedlist"
        exact={true}
        element={<Studentpromotedata></Studentpromotedata>}
      />

      <Route path="/demote" element={<NotToPromote></NotToPromote>}></Route>
      
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/stuedudtls" element={<StudentEDucationDetails></StudentEDucationDetails>}></Route>
      {/* <Route path="/jvd" element={<JvdApplication></JvdApplication>}></Route> */}
      <Route path="/stuedu" element={<StudentDetails></StudentDetails>}></Route>
      <Route path="/" element={<PreRegistartion></PreRegistartion>}></Route>
      <Route path="/jvd" element={<OnboardingMainPage></OnboardingMainPage>}></Route>
      




    
    </Routes>
  </Router>
);
export default RoutesComponent;
