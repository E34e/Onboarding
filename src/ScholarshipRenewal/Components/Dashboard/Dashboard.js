import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PieComponent from "./PieComponet";
import Header from '../../../Header/Header';
import * as jnb from "react-bootstrap"; 
function Dashboard() {
  const formikInitialValues = {
    course: "",
    year: "",
  };
  const formIk = useFormik({
    enableReinitialize: true,
    initialValues: formikInitialValues,
  });


  return (
    <>
     <Header />
     <div className="main_section">  </div>
      <FormikProvider value={formIk}>
        <Form onSubmit={formIk.handleSubmit}>

        <jnb.Container >
          <jnb.Row >
                   <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                            {/* <h1>Form of Application For Service Pension / Family Pension / Retirement Gratuity / <br/>Service Gratuity  / Commutation</h1> */}
                            <h1>Dashboard</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>
        </jnb.Container>



        <jnb.Container className="outer-page-content-container " >
            <jnb.Row className="p-4">
              <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
               
                <div class="deck">
                <div class="service">
                  <div class="service-title">
                    <h6>Students<br/> Administration</h6> 
                    <p>Workflows around student administration</p>
                    <a href="/" class=""><img alt="link to Service" src="../img/right-arrow.svg" class="service-link"/></a>
                    <div class="icon"><img src="../img/administration.svg" alt="Administration" /></div>
                  </div>
                
                </div>
                </div>
                </jnb.Col>
                <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
                <div class="deck">
                <div class="service">
                  <div class="service-title">
                    <h6>Scholarship</h6> 
                    <p>Workflows for Scholarship</p>
                    <a href="/" class=""><img alt="link to Service" src="../img/right-arrow.svg" class="service-link"/></a>
                    <div class="icon"><img src="../img/administration.svg" alt="Administration" /></div>
                  </div>
                
                </div>
                </div>
              
 
 
 
              </jnb.Col>
            </jnb.Row> 
      </jnb.Container>
      </Form>
      </FormikProvider>
    </>
  );
}

export default Dashboard;
