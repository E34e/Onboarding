import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Header from '../../Header/Header';
import * as jnb from "react-bootstrap";

import StudentDetails from '../JVD_Application/StudentDetails';
import StudentEDucationDetails from '../JVD_Application/StudentEDucationDetails';
import axios from 'axios';
import { useBetween } from 'use-between';
import useCounter from '../JVD_Application/allTags';

function useSharedCounter() { 
       return useBetween(useCounter);
     }

export default function OnboardingMainPage() {
       // const[RegistrationDetails,SetregistrationDetails]=useState({});
       const[studentData,setStudentData]= useState({});
       const { adharValue } = useSharedCounter();
             
       function regDetailsFunction() {
              // let regUrl = "http://172.16.150.61:8302/jnbap/getCetDetails"+ adharValue;
              let regUrl="http://172.16.150.53:8302/jnbap/"+adharValue +"/getCetDetails"
 axios.get(regUrl).then((response) => {
  console.log("response",response.data);
  setStudentData(response.data);
  console.log("filtered REsponse",studentData[0])
 });
 }
 useEffect(() => {
              regDetailsFunction();
            }, []);    
           
           
    
  return (
    <div>
       <Header/> 
       <div className="main_section">  </div>
       
       <jnb.Container className='outer-page-content-container'>

       <jnb.Row className="px-5 pt-5" >
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Student UID Number:</b>
       </jnb.Col>
       
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
{studentData[0].uid}
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Student Name:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
{studentData[0].stu_name}
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>DOB:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
       {studentData[0].dob}
       </jnb.Col>
       <br/>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Father Name:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
       {studentData[0].stu_father_name}   
   </jnb.Col>
   <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Mother Name:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
       {studentData[0].stu_mother_name}
       </jnb.Col>  
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Social Status:</b>
       </jnb.Col>   
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
       {studentData[0].caste}
       </jnb.Col> 
       <br/>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>District:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
       {studentData[0].stu_district}
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Mandal:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
       {studentData[0].stu_mandal}
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Village:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
       {studentData[0].stu_village}
       </jnb.Col>
  

       <jnb.Tabs  defaultActiveKey="Studentdetails"  id="controlled-tab-example"  className="btn btn-light" >
  <jnb.Tab  eventKey="Studentdetails"  title="Student Details"><StudentDetails></StudentDetails> </jnb.Tab>
       <jnb.Tab  eventKey="EducationalDetails"  title="Education Details"><StudentEDucationDetails></StudentEDucationDetails></jnb.Tab>
              </jnb.Tabs>
              </jnb.Row>
              
 </jnb.Container>

    </div>
  )
}
