import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OnboardingMainPage from "./jvd_new onBoarding/FreshOnboarding/OnboardingMainPage";
import StudentDetails from "./jvd_new onBoarding/JVD_Application/StudentDetails";
import StudentEDucationDetails from "./jvd_new onBoarding/JVD_Application/StudentEDucationDetails";
import PreRegistration from "./jvd_new onBoarding/PreRegistration/PreRegistration";

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
     
      <Route path="/stuedu" element={<StudentDetails></StudentDetails>}></Route>
      {/* <Route path="/" element={<PreRegistartion></PreRegistartion>}></Route> */}
      <Route path="/" element={<PreRegistration></PreRegistration>}></Route>
      <Route path="/jvd" element={<OnboardingMainPage></OnboardingMainPage>}></Route>
      
</Routes>
</Router>


    
 
);
export default RoutesComponent;
