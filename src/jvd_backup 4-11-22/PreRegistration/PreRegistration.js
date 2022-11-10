import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik';
import React from 'react'
import { Form } from 'react-bootstrap';
import * as jnb from "react-bootstrap"; 
import Header from '../../Header/Header';
import { formikValidations, forrmikInitialValues } from './PreRegistrationValidation';
import { useNavigate } from 'react-router-dom';
import LoadingService from '../../ScholarshipRenewal/Components/Api\'s/LoadingService';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useBetween } from 'use-between';
import useCounter from '../JVD_Application/allTags';
export default function PreRegistration() {
    function useSharedCounter() {
        return useBetween(useCounter);
      }
      const {
        setadharValue
      } = useSharedCounter();



    const [showDistCode,setDistCode]=useState('');
    const [showManList,setManList]=useState([]);
    const [showDistManApi,setDistManApi]=useState({});
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

      function clearMandalsFunc()
      {
        formIk.setFieldValue("mandaLcode","");
      }
    const navigate=useNavigate();
    const formIk = useFormik({
        enableReinitialize:true,
        initialValues:forrmikInitialValues,
     //   validationSchema:formikValidations,
        onSubmit:(values)=>{
            LoadingService.SaveCetData(values).then((res)=>{
                if(res.data!==null){
                    alert("Data Submitted Successfully");
                    console.log(JSON.stringify(res.data))
                    navigate("/jvd")
                }
                else{
                    alert("Failed To Submit ");
                }
            })
           .catch(()=>{
            alert("Server is too busy plz try again after sometime")
           })
          
           
        }
    });
  return (
    <div>
             <Header/>
        <div className="main_section">  </div>
 <FormikProvider value={formIk}>
        <Form onSubmit={formIk.handleSubmit} onChange={formIk.handleChange}>
        <jnb.Container>
        <jnb.Row >
        <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
 <h1>Pre-Registration Form</h1>
                        </div>
                    </jnb.Col> 
        </jnb.Row>
        </jnb.Container>
      

        <jnb.Container className="outer-page-content-container " > 
 <div className="jumbotron mt20 form-card-jnb" style={{ marginTop: "5px" }}>
        <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
         <h1>CET Details</h1>
        </div>
        <jnb.Row className="px-5 pt-5">
  <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p">
                     <span className="label-text-style"><b>Academic Year</b></span>
<Field component="select" name="ac_year" className="form-control">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Field>
                     <ErrorMessage name="ac_year" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b>CET Type</b></span>
            <Field component="select" name="cet_type" className="form-control">
              <option value="">Select</option>
              <option value="1">ICE</option>
              <option value="2">EAPCET</option>
              <option value="3">RCET</option>
            </Field>
                     <ErrorMessage name="cet_type" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
         
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
           <jnb.InputGroup className="mb-4p">
                     <span className="label-text-style"><b>CET Hallticket Number</b></span>
                     <Field type="text" name="cet_ht_no" className="form-control"/>
                     <ErrorMessage name="cet_ht_no" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p">
                     <span className="label-text-style"><b>CET Rank</b></span>
                     <Field type="text" name="cet_rank" className="form-control"/>
                     <ErrorMessage name="cet_rank" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b>CET Course Name</b></span>
                 <Field component="select" name="cet_course_name" className="form-control">
              <option value="">Select</option>
              <option value="1">Agriculture Engineering</option>
              <option value="2">Civil Engineering</option>
              <option value="3">Computer Science Engineering</option>
            </Field>
                     <ErrorMessage name="cet_course_name" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
         
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
           <jnb.InputGroup className="mb-4p">
                     <span className="label-text-style"><b>CET College Name</b></span>
                    
<Field component="select" name="cet_coll_name" className="form-control">
              <option value="">Select</option>
              <option value="1">Government College of Engineering, Amravati</option>
              <option value="2">Sant Gadge Baba Amravati University, Amravati</option>
              <option value="3">Shri Sant Gajanan Maharaj College of Engineering, Shegaon</option>
            </Field>
                     <ErrorMessage name="cet_coll_name" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>       
          
           </jnb.Row>
           <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
         <h1>Personal Details</h1>
        </div>
        <jnb.Row className="px-5 pt-5">
        <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p">
                     <span className="label-text-style"><b>Student Aadhaar No</b></span>
                   
                     <Field type="text" name="uid" className="form-control" 
                     onChange={ (e) => { setadharValue(e.target.value) }}/>
                     <ErrorMessage name="uid" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Student Name</b></span>
                    
                     <Field type="text" name="stu_name" className="form-control"/>
                     <ErrorMessage name="stu_name" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b>DOB&nbsp;</b></span>
                 <Field type="date" name="dob" className="form-control"/>
                     <ErrorMessage name="dob" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Father Name</b></span>
                     {/* <label>Student Aadhar No</label> */}
                     <Field type="text" name="stu_father_name" className="form-control"/>
                     <ErrorMessage name="stu_father_name" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Mother Name</b></span>
                     <Field type="text" name="stu_mother_name" className="form-control"/>
                     <ErrorMessage name="stu_mother_name" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Social Status of the Student</b></span>
                     {/* <label>Student Aadhar No</label> */}
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
                     <span className="label-text-style"><b>District</b></span>
                     {/* <Field component="select" name="stu_district" className="form-control">
              <option value="">Select</option>
              <option value="1">Prakasam</option>
              <option value="2">Guntur</option>
              <option value="3">Krishna</option>
            </Field> */}

<Field component="select" name="stu_district" className="form-control"
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

                     <ErrorMessage name="stu_district" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Mandal</b></span>
                     {/* <Field component="select" name="stu_mandal" className="form-control">
              <option value="">Select</option>
              <option value="1">Chirala</option>
              <option value="2">Palnadu</option>
              <option value="3">kolluru</option>
            </Field> */}

<Field component="select" name="stu_mandal" className="form-control">
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
                     <ErrorMessage name="stu_mandal" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Village</b></span>
                     <Field component="select" name="stu_village" className="form-control">
              <option value="">Select</option>
              <option value="1">Ramapuram</option>
              <option value="2">odarevu</option>
              <option value="3">suryalanka</option>
            </Field>
                     <ErrorMessage name="stu_village" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
</jnb.Row>



<div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
         <h1>SSC Details</h1>
        </div>
        <jnb.Row className="px-5 pt-5">
   
           <jnb.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>SSC Hallticket Number</b></span>
             <Field type="text" name="ssc_htno" className="form-control"/>
                     <ErrorMessage name="ssc_htno" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
 <jnb.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>SSC Pass Year</b></span>
                     <Field component="select" name="ssc_pass_year" className="form-control">
              <option value="">Select</option>
              <option value="1">2022</option>
              <option value="2">2021</option>
              <option value="3">2020</option>
            </Field>
                     <ErrorMessage name="ssc_pass_year" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>

           <jnb.Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>SSC Pass Type</b></span>
                     <Field component="select" name="ssc_pass_type" className="form-control">
              <option value="">Select</option>
              <option value="1">Regular</option>
              <option value="2">Supply</option>
             
            </Field>
                     <ErrorMessage name="ssc_pass_type" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>

           
</jnb.Row>
 </div>
 <jnb.Row className="p-4">
            <jnb.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>&nbsp;</jnb.Col>
            <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
            <div className="d-grid">
            <jnb.Button variant="success" type="submit">
          Submit
        </jnb.Button> 
        </div>
              </jnb.Col>
        
      </jnb.Row>
        </jnb.Container>

       


 </Form>
        </FormikProvider>
    </div>
  )
}
