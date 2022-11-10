import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { Button, Card, Col, FormGroup, Row } from "react-bootstrap";
import * as Yup from "yup";
import * as jnb from "react-bootstrap"; 
import Header from "../Header/Header";


export default function StudentEDucationDetails() {
    const Validation= Yup.object().shape({
        admissiondate: Yup.string().required("Required"),
        universityname: Yup.string().required("Required"),
        clgname: Yup.string().required("Required"),
        course: Yup.string().required("Required"), 
         year: Yup.string().required("Required"),
        section: Yup.string().required("Required"),
        admissionCategory: Yup.string().required("Required"),
        admissiondate: Yup.string().required("Required"), 
        extracircular: Yup.string().required("Required"),
        hostel: Yup.string().required("Required"),
        income: Yup.string().required("Required"),

      });

    const formIk = useFormik({
        initialValues: {
            admissiondate: "",
        universityname: "",
        clgname: "",
        course: "",
        year:"",
        section:"",
        admissionCategory:"",
        admissiondate:"",
        extracircular:"",
        hostel:"",
        income:"",
        
        },
        
        onSubmit: (values) => {
           console.log(values);
          alert(JSON.stringify(values));
    
       
        },
        
        validationSchema:Validation,
        
      });
   
  return (
    <div>
         <Header />
     <div className="main_section">  </div>
    
      <FormikProvider value={formIk}>
        <Form onSubmit={formIk.handleSubmit}>
        <jnb.Container >
          <jnb.Row >
                   <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                          
                            <h1>Student Educational Details</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>

        <div className="jumbotron mt20" style={{ marginTop: "5px" }}>
        <jnb.Row className="px-5 pt-5">
          
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Admission Date: </b></span>
                     {/* <label>Student Aadhar No</label> */}
                     <Field type="date" name="admissiondate" className="form-control"/>
                     <ErrorMessage name="admissiondate" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Board/University Name :</b></span>
                <Field as="select" className="form-control" name="universityname">
                  <option value="0">--Select--</option>
                  <option value="1">University1</option>
                  <option value="2">University2</option>
                </Field> 
                     <ErrorMessage name="universityname" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>College Name:</b></span>&nbsp;&nbsp;
                
                <Field as="select" className="form-control" name="clgname">
                  <option value="00">--Select--</option>
                  <option value="11">College1</option>
                  <option value="22">College2</option>
                </Field> 
                     <ErrorMessage name="clgname" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>   Course/Group :</b></span>
                   
                <Field as="select" className="form-control" name="course">
                  <option value="000">--Select--</option>
                  <option value="111">Course1</option>
                  <option value="222">Course2</option>
                </Field>
                     <ErrorMessage name="course" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           </jnb.Row >
           <jnb.Row className="px-5 pt-3" >
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b> Year of study:</b></span>
                
                <Field as="select" className="form-control" name="year">
                  <option value="00">--Select--</option>
                  <option value="11">year1</option>
                  <option value="22">year2</option>
                </Field> 
                     <ErrorMessage name="year" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Section: </b></span>
                     
                <Field as="select" className="form-control" name="section">
                  <option value="000">--Select--</option>
                  <option value="111">Section1</option>
                  <option value="222">Section2</option>
                </Field>
                     <ErrorMessage name="section" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b> Admission Category:&nbsp;</b></span>
                
                <Field as="select" className="form-control" name="admissionCategory">
                  <option value="00">--Select--</option>
                  <option value="11">Category1</option>
                  <option value="22">Category2</option>
                </Field> 
            <ErrorMessage name="admissionCategory" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Admission Date:</b></span>
              <Field
                type="text"
                name="admissiondate"
                className="form-control"/>
            <ErrorMessage name="admissiondate" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           </jnb.Row>
           <jnb.Row className="px-5 pt-3">
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Extracurricular Activity: </b></span>
             
                <Field
                type="text"
                name="extracircular"
                className="form-control" 
              />
            <ErrorMessage name="extracircular" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Hosteller/Days Scholar : </b></span>
                     <Field type="radio" name="hostel" value="yes"/>
                      &nbsp;Hostler  &nbsp;
                    <Field type="radio" name="hostel" value="no"/>
                      &nbsp;Day Scholar
                     <ErrorMessage name="hostel" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
          
           
            </jnb.Row>
        </div>

        {/* ********************** Student Other Details************************ */}
<br></br>
        <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
        {/* <div className="inner-herbpage-service-title-sub mb-4p5 mt-3"> */}
            <h1>Student Other Details</h1>
        </div>
        <div className="jumbotron mt20" style={{ marginTop: "5px" }}>
        <jnb.Row className="px-5 pt-5">
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Income Certificate No: </b></span>
             <Field
                type="text"
                name="income"
                className="form-control" 
              />
            <ErrorMessage name="income" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
          </jnb.Row>
        </div>
      </jnb.Container>    
      <center>
      <jnb.Row>
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <button
            type="submit"
            className="btn btn-success pull-right submitButton"
            variant="success"
          >
           Submit &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          </jnb.Col>
          </jnb.Row>
          </center>

      </Form>
      </FormikProvider>
    
    </div>
    
  )
}
