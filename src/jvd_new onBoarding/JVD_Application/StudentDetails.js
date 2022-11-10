
import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ErrorMessage, Field, Formik, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as jnb from "react-bootstrap"; 
// import Header from "../Header/Header";
import { formikValidations, forrmikInitialValues } from "./studentDetailsValidations";
// import LoadingService from "./Api's/LoadingService";
import { useBetween } from "use-between";
import useCounter from "./allTags";
import axios from "axios";
import LoadingService from "../../ScholarshipRenewal/Components/Api's/LoadingService";
// import useCounter from "/allTags";
function useSharedCounter() { return useBetween(useCounter);}
export default function StudentDetails() {
 
  const { tabDetails,setTabDetails} = useSharedCounter();
  const formIk = useFormik({
    enableReinitialize: true,
    initialValues: forrmikInitialValues,
    onSubmit: 
    (values) => {
      alert("Hello")
      LoadingService.studentDetailsSave(values)
        .then((res) => {
          if (res.data) {
            alert("Student details");
            if (res.data !== null) {
              alert("Inserted Data Successfully!.");
              //navigate("/promotestudents");
              console.log("Successfully Inserted data",JSON.stringify(res.data));
              console.log(JSON.stringify(res.data));
            } else {
              alert("Oops! Something went wrong at Student Details tab,Please check");
              console.log("Oops! Something went wrong at Student Details tab,Please check");
            }
            console.log(res.data);
          } else {
            alert("failure");
            console.log("failure at student page");
          }
        })
        .catch(() => {
          console.log("Exception Occured 71");
        });
    },
    // (values) => {console.log(values);
    //    alert(JSON.stringify(values));
    //    alert("tabDetails"+JSON.stringify(tabDetails));
    //    setTabDetails({ currentTab: "StudentEDucationDetails" });
 
    
    //  },
    
  // validationSchema: formikValidations,
  });

  const navigate = useNavigate();
  const navigatetopromotedata = () => {
    navigate("/dashboard");
  };
  
    function clearMandalsFunc()
    {
      formIk.setFieldValue("mandaLcode","");
    }
    const [showDistCode,setDistCode]=useState('');
    const [showManList,setManList]=useState([]);
    const [showDistManApi,setDistManApi]=useState({});
    const [showMandalCode,setMandalCode]=useState('');


    useEffect(()=>{
      axios.get("https://jnbnivasb.apcfss.in/apdistman").then(response=>{
       // alert(JSON.stringify(response.data));
        setDistManApi(response.data);
      })
    },[]
    );

    useEffect(
      () => {
        //alert(showDistCode);
        if(showDistCode !== '')
        {
          setManList(showDistManApi.APCFSS_Mandals.filter((dVal) => dVal.distCode==showDistCode));
        }
      },[showDistCode]
    );
          //  ***************Setting Field Values************
    
     
        
    useEffect(()=>{
      gapDetailsFunction()
    },[]
    );


    function gapDetailsFunction() {
      //alert("First ::"+application);
      let regUrl =
      "http://172.16.150.61:8302/jnbap/getCetDetails";
      axios.get(regUrl).then((response) => {
     alert(JSON.stringify(response.data));
           formIk.setFieldValue("studentAadharNo",response.data.uid);
          formIk.setFieldValue("studentName","rajini");
            formIk.setFieldValue("fatherName",response.data.stu_father_name);
           
        
    
      })
    }

    function clrPh()
    {
      formIk.setFieldValue("saderamNo","");
      formIk.setFieldValue("typeOfDisability","");
      formIk.setFieldValue("percentOfDisability","");
      formIk.setFieldValue("saderamCertificate","");
    }
    function clrPerAddr()
    {
      formIk.setFieldValue("isPermanentState","");
      formIk.setFieldValue("isPermanentDistrict","");
      formIk.setFieldValue("isPermanentManadl","");
      formIk.setFieldValue("isPermanentHabitation","");
      formIk.setFieldValue("isPermanentStreet","");
      formIk.setFieldValue("isPermanentDoorNo","");
      formIk.setFieldValue("isPermanentPincode","");
    }
    function sadaramReadFileDataAsBase640(e) {
      e.preventDefault();
      const filevalue = e.target.value;
      const file = e.target.files[0];
     // alert(e.target.value);
     formIk.setFieldValue("saderamCertificate",filevalue);
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => { 
                             
            formIk.setFieldValue("fileUpload",event.target.result);
            
          };
    
          reader.onerror = (err) => {
              reject(err);
          };
    
          reader.readAsDataURL(file);
      });
    }
    function clrDocUpload()
    {
      formIk.setFieldValue("saderamCertificate","");
    }
  
      
  return (
    <>
     <div className="main_section">  </div>
    
      <FormikProvider value={formIk}>
        <Form onSubmit={formIk.handleSubmit} onChange={formIk.handleChange}>
        <jnb.Container >
          <jnb.Row >
                   <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                            <h1>Student Details</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>
      </jnb.Container>

        <jnb.Container className="outer-page-content-container " > 
    
        <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
            <h1>Personal Details</h1>
        </div>
        <div className="jumbotron mt20 form-card-jnb" style={{ marginTop: "5px" }}>
        <jnb.Row className="px-5 pt-5">
          
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p">
                     <span className="label-text-style"><b>Student Aadhaar No</b></span>
                     <Field type="text" name="studentAadharNo" className="form-control"/>
                     <ErrorMessage name="studentAadharNo" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Student Name</b></span>
                     <Field type="text" name="studentName" className="form-control"/>
                     <ErrorMessage name="studentName" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b>Gender&nbsp;</b></span>
            <Field type="radio" name="gender" value="M"/>
            &nbsp;Male  &nbsp;
            <Field type="radio" name="gender" value="F"/>
            &nbsp;Female
            <ErrorMessage name="gender" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b>DOB&nbsp;</b></span>
                 <Field type="date" name="dob" className="form-control"/>
                     <ErrorMessage name="dob" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
          
           </jnb.Row>
           <jnb.Row className="px-5 pt-3" >
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Father Aadhaar No</b></span>
                     <Field type="text" name="fatherAadharNo" className="form-control"/>
                     <ErrorMessage name="fatherAadharNo" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Father Name</b></span>
                     <Field type="text" name="fatherName" className="form-control"/>
                     <ErrorMessage name="fatherName" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Mother Aadhaar No</b></span>
                     <Field type="text" name="motherAadharNo" className="form-control"/>
                     <ErrorMessage name="motherAadharNo" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Mother Name</b></span>
                     <Field type="text" name="motherName" className="form-control"/>
                     <ErrorMessage name="motherName" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
          </jnb.Row>

          <jnb.Row className="px-5 pt-3" >
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Mobile Number</b></span>
                     <Field type="text" name="mobileNo" className="form-control" maxLength="10"/>
                     <ErrorMessage name="mobileNo" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Email Id</b></span>
                     <Field type="text" name="email" className="form-control"/>
                     <ErrorMessage name="email" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Father/Guardian Occupation </b></span>
                     <Field type="text" name="parentOccupation" className="form-control"/>
                     <ErrorMessage name="parentOccupation" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Mother Tongue</b></span>
            <Field component="select" name="motherToungue" className="form-control">
              <option value="">Select</option>
              <option value="1">Telugu</option>
              <option value="2">English</option>
              <option value="3">indi</option>
            </Field>
            <ErrorMessage name="motherToungue" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
          </jnb.Row>
          <jnb.Row  className="px-5 pt-3" >
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Religion</b></span>
            <Field component="select" name="religion" className="form-control">
              <option value="">Select</option>
              <option value="H">Hindu</option>
              <option value="M">BC</option>
              <option value="C">SC</option>
              <option value="S">ST</option>
            </Field>
            <ErrorMessage name="religion" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
         
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Caste</b></span>
            <Field component="select" name="caste" className="form-control">
              <option value="">Select</option>
              <option value="1">OC</option>
              <option value="2">BC</option>
              <option value="3">SC</option>
              <option value="4">ST</option>
            </Field>
            <ErrorMessage name="caste" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Sub Caste</b></span>
            <Field component="select" name="subCaste" className="form-control">
              <option value="">Select</option>
              <option value="1">OC</option>
              <option value="2">BC</option>
              <option value="3">SC</option>
              <option value="4">ST</option>
            </Field>
            <ErrorMessage name="subCaste" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Nationality</b></span>
            <Field component="select" name="nationality" className="form-control">
              <option value="">Select</option>
              <option value="1">Indian</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Field>
            <ErrorMessage name="nationality" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           </jnb.Row>

           <jnb.Row className="px-5 pt-3">
          
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                <jnb.InputGroup className="mb-4p5">
                <span className="label-text-style"><b>Physically Challenged &nbsp;</b></span>
           <Field type="radio" name="isPh" value="true"/>
           &nbsp;Yes  &nbsp;
           <Field type="radio" name="isPh" value="false" onClick={(e)=>{clrPh(e);clrDocUpload(e)}}/>
           &nbsp;No
           <ErrorMessage name="isPh" component="div" className="text-error"/>
                </jnb.InputGroup>
          </jnb.Col>
          {formIk.values.isPh==='true' && 
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
           <jnb.InputGroup className="mb-4p5">
               <span className="label-text-style"><b>Saderam No</b></span>
               <Field type="text" name="saderamNo" className="form-control"/>
               <ErrorMessage name="saderamNo" component="div" className="text-error" />
           </jnb.InputGroup>
       </jnb.Col>}
       {formIk.values.isPh==='true' && 
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
              <jnb.InputGroup className="mb-4p5">
            <span className="label-text-style"><b>Type of Disability</b></span>
           <Field component="select" name="typeOfDisability" className="form-control">
             <option value="">Select</option>
             <option value="1">HH-Hearing Handicaped</option>
             <option value="2">MW-Muscular Weakness</option>
             <option value="3">OH-Orthopaedically Handicaped</option>
             <option value="4">VH-Visually Handicaped</option>
           </Field>
           <ErrorMessage name="typeOfDisability" component="div" className="text-error" />
           </jnb.InputGroup>
           
       </jnb.Col>}
       {formIk.values.isPh==='true' && 
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
           <jnb.InputGroup className="mb-4p5">
               <span className="label-text-style"><b>% of disability </b></span>
               <Field component="select"  name="percentOfDisability" className="form-control">
               <option value="">--Select--</option>
                               <option value="1">40</option>
                               <option value="2">46</option>
                               <option value="3">51</option>
                               <option value="4">56</option>
                               <option value="5">61</option>
                               <option value="6">66</option>
                               <option value="7"> 70</option></Field>
               <ErrorMessage name="percentOfDisability" component="div" className="text-error" />
           </jnb.InputGroup>
       </jnb.Col>}
         </jnb.Row>
         {formIk.values.isPh==='true' && 
         <jnb.Row  className="px-5 pt-3" >
        <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                  <jnb.InputGroup className="mb-4p5">                       
                       <span className="label-text-style"><b>Sadarem Certificate Upload&nbsp;</b></span>
                       {/* <Field type="file" name="saderamCertificate" className="form-control"></Field> */}
                       <Field type="file" name="saderamCertificate" className="form-control" onChange={(e)=>{ sadaramReadFileDataAsBase640(e);}}/>
                       <Field type="hidden" name="fileUpload" className="form-control"/>
                       </jnb.InputGroup>
                    <ErrorMessage name="saderamCertificate" component="div" className="text-error"/>
            </jnb.Col>
    </jnb.Row>
        }  
          
        {/* ********************** Student Address Details************************ */}
<br></br>
        <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
       
            <h1>Student Address Details</h1>
        </div>
        <jnb.Row className="px-5 pt-5">
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>State</b></span>
            <Field component="select" name="stateCode" className="form-control">
              <option value="">Select</option>
              <option value="1">Andhra Pradesh</option>
              <option value="2">Telangana</option>
             
            </Field>
            <ErrorMessage name="stateCode" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>District</b></span>
            <Field component="select" name="district" className="form-control"
             onBlur={(event)=>{setDistCode(event.target.value)}}
             onClick={()=> {clearMandalsFunc(); 
           }}
             >
              <option value="">--Select--</option>
              {showDistManApi.APCFSS_Districts !== undefined &&
              showDistManApi.APCFSS_Districts.map((ds,i)=>{
                return <option key={i} value={ds.distCode}>{ds.distName}</option>
              })}
              
             
            </Field>
            <ErrorMessage name="district" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Mandal</b></span>
            <Field component="select" name="mandal" className="form-control">
              <option value="">--Select--</option>
              {/* <option value="1">Bhimavaram</option>
              <option value="2">Mamidikuduru</option>
              <option value="3">allavaram</option>
              */}
              {showManList !== undefined && 
            showManList.map((ms,i)=>{
              return <option key={i} value={ms.mandalCode}>{ms.mandalName}</option>
            })
            }
            </Field>
            <ErrorMessage name="mandal" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
        
                <span className="label-text-style"><b>Village</b></span>
            <Field component="select" name="village" className="form-control">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
             
            </Field>
            <ErrorMessage name="village" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
          
           </jnb.Row>
           <jnb.Row className="px-5 pt-3">

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                    <span className="label-text-style"><b>Habitation</b></span>
            <Field component="select" name="habCode" className="form-control">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option></Field>
              <ErrorMessage name="habCode" component="div" className="text-error" />

                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Street / Land Mark</b></span>
                    
                     <Field type="text" name="street" className="form-control"/>
                     <ErrorMessage name="street" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Door/House No</b></span>
                    
                     <Field type="text" name="doorNo" className="form-control"/>
                     <ErrorMessage name="doorNo" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>PIN Code</b></span>
                     {/* <label>Student Aadhar No</label> */}
                     <Field type="text" name="pincode" className="form-control"/>
                     <ErrorMessage name="pincode" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>

           </jnb.Row>
        <br></br>
        <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
            <h1>Permanent address </h1>
        </div>
        <jnb.Row className="px-5 pt-5">
       
        <jnb.Col xs={12} sm={12} md={12} lg={3} xl={5} xxl={5}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b>If Present Addres is same as Permanent address &nbsp;</b></span>
            <Field type="radio" name="isPermanentAddr" value="yes" onClick={clrPerAddr}/>
            &nbsp;Yes  &nbsp;
            <Field type="radio" name="isPermanentAddr" value="no"/>
            &nbsp;No
            <ErrorMessage name="isPermanentAddr" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           </jnb.Row>
           {formIk.values.isPermanentAddr==='no' && 
           <jnb.Row  className="px-5 pt-3">
             <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>State</b></span>
            <Field component="select" name="isPermanentState" className="form-control">
              <option value="">Select</option>
              <option value="1">Andhra Pradesh</option>
              <option value="2">Telangana</option>
             
            </Field>
            <ErrorMessage name="isPermanentState" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>District</b></span>
            <Field component="select" name="isPermanentDistrict" className="form-control">
              <option value="">Select</option>
              <option value="1">West Godavari</option>
              <option value="2">East Godavari</option>
              <option value="3">Nellore</option>
              <option value="4">Kadapa</option>
              <option value="5">Guntur</option>
              <option value="6">Prakasam</option>
            
            </Field>
            <ErrorMessage name="isPermanentDistrict" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Mandal</b></span>
            <Field component="select" name="isPermanentManadl" className="form-control">
              <option value="">Select</option>
              <option value="1">Bhimavaram</option>
              <option value="2">Mamidikuduru</option>
              <option value="3">allavaram</option>
            
            </Field>
            <ErrorMessage name="isPermanentManadl" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Village</b></span>
            <Field component="select" name="isPermanentVillage" className="form-control">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Field>
            <ErrorMessage name="isPermanentVillage" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           </jnb.Row>}
           {formIk.values.isPermanentAddr==='no' && 
           <jnb.Row className="px-5 pt-3">
              <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Habitation</b></span>
            <Field component="select" name="isPermanentHabitation" className="form-control">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </Field>
            <ErrorMessage name="isPermanentHabitation" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Street / Land Mark</b></span>
                    
                     <Field type="text" name="isPermanentStreet" className="form-control"/>
                     <ErrorMessage name="isPermanentStreet" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Door/House No</b></span>
                     <Field type="text" name="isPermanentDoorNo" className="form-control"/>
                     <ErrorMessage name="isPermanentDoorNo" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>PIN Code</b></span>
                     <Field type="text" name="isPermanentPincode" className="form-control"/>
                     <ErrorMessage name="isPermanentPincode" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           </jnb.Row>}
        <jnb.Row className="p-4">
            <jnb.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>&nbsp;</jnb.Col>
            <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
            <div className="d-grid">
            <Button variant="success" type="submit">
          Submit
        </Button> 
        </div>
              </jnb.Col>
        
      </jnb.Row>
      </div>
    
      </jnb.Container> 
        </Form>
      </FormikProvider>
    
    </>
  );
}