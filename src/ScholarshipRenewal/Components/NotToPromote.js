
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Field, Formik, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import Header from "../../Header/Header";
import * as jnb from "react-bootstrap"; 
import LoadingService from "./Api's/LoadingService";
export default function Demote() {
  const forrmikInitialValues = {
    hallticket: "345712",
    rollno: "241",
    admdate: "20/04/2022",
    scheme: "",
    scholarship_type: "Professional Course Scholarship",
    upload: "",
  };

  const formIk = useFormik({
    enableReinitialize: true,
    initialValues: forrmikInitialValues,
    onSubmit: (values) => {
      LoadingService.updateData(values)
        .then((res) => {
          if (res.data) {
            alert("details");
            if (res.data !== null) {
              alert("Inserted Successfully!.");
              navigate("/promotestudents");
              console.log(JSON.stringify(res.data));
            } else {
              alert("Oops! Something went wrong,Please check");
            }
            console.log(res.data);
          } else {
            alert("failure");
          }
        })
        .catch(() => {
          console.log("Exception Occured 71 ");
        });
    },
  });

  const navigate = useNavigate();
  const navigatetopromotedata = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <Header />
     <div className="main_section">  </div>
     <jnb.Container >
          <jnb.Row >
                   <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                            {/* <h1>Form of Application For Service Pension / Family Pension / Retirement Gratuity / <br/>Service Gratuity  / Commutation</h1> */}
                            <h1>Demote</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>
        </jnb.Container>
      <FormikProvider value={formIk}>
        <Form>
        <Header />
        <jnb.Container className="outer-page-content-container " >
        <jnb.Row className="px-5 pt-5">
          
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>HALL TICKET NUMBER</b></span>
                     <Field type="text" name="hallticket" className="form-control"/>
                 </jnb.InputGroup>
           
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
         <jnb.InputGroup className="mb-4p5">
              <span className="label-text-style"><b> Roll Number</b></span>
              <Field type="text" name="rollno" className="form-control" />
         </jnb.InputGroup> 
</jnb.Col>

<jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
         <jnb.InputGroup className="mb-4p5">
              <span className="label-text-style"><b>Scheme </b></span>
              <Field type="text" name="scheme" className="form-control" />     
         </jnb.InputGroup> 
</jnb.Col>

<jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
         <jnb.InputGroup className="mb-4p5">
              <span className="label-text-style"><b>Admission Date </b></span>
              <Field type="date" name="admdate" className="form-control" />   
         </jnb.InputGroup> 
</jnb.Col>

<jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
         <jnb.InputGroup className="mb-4p5">
              <span className="label-text-style"><b> Scholarship Type</b></span>
              <Field
             type="text"
             name="scholarship_type"
             className="form-control"
           />        
         </jnb.InputGroup> 
</jnb.Col>
<jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
         <jnb.InputGroup className="mb-4p5">
              <span className="label-text-style"><b>Upload </b></span>
              <Field type="file" name="upload" className="form-control" />   
         </jnb.InputGroup> 
</jnb.Col>
  

</jnb.Row>
       
          
        <jnb.Row className="px-5 ">
      <jnb.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>
        </jnb.Col>
        <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
          <div className="d-grid">
        <button type="submit" className="btn btn-success">
                    {" "}
                    Submit
                  </button>
                  </div>
        </jnb.Col>
      </jnb.Row>
     
      </jnb.Container>    

      </Form>
      </FormikProvider>
    
    </>
  );
}