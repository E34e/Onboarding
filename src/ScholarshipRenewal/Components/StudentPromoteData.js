import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Header from '../../Header/Header';
import * as jnb from "react-bootstrap"; 
import Demote from "./NotToPromote";

export default function Studentpromotedata() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [studentdata, setstudentdata] = useState([]);
  function Studentdetails() {
    let regUrl =
      "https://krewzqsjge.execute-api.ap-south-1.amazonaws.com/test/students";
    axios.get(regUrl).then((response) => {
      setstudentdata(response.data);
    });
  }
  useEffect(() => {
    Studentdetails();
  }, []);

  const navigate = useNavigate();
  const navigateToStudentDetails = () => {
    navigate("/demote");
  };
  const navigateToDashboard = () => {
    navigate("/renewal");
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
                            <h1>Student Promote Data</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>
        </jnb.Container>

        <jnb.Container className="outer-page-content-container " >
            <jnb.Row className="p-4">
            <div class="table-responsive">
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Father/Mother Name</th>
              <th>Caste</th>
              <th>Promote ?</th>
              <th>Declaration ?</th>
              <th>Income Certificate ?</th>
              <th>Caste Certificate ?</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {studentdata.map((data) => {
              return (
                <>
                  {/* -------------------------------------------------------data loop -------------------------------------------------------------------- */}
                  <tr>
                    <td>{data.student_id}</td>
                    <td>{data.student_name}</td>
                    <td>{data.parentsname}</td>
                    <td>{data.caste}</td>
                    <td>{data.promote}</td>
                    <td>{data.promote}</td>
                    <td>{data.promote}</td>
                    <td>{data.promote}</td>
              
                    <tb >
                      <Button
                        variant="outline-dark" 
                        class="btn btn-success btn-sm my-1 "
                        onClick={navigateToStudentDetails}
                      >
                        Edit
                      </Button>
                    </tb>
                  </tr>
                </>
              );
            })}
          </tbody>
          
        </table>
        </div>

        <jnb.Row className="p-4">
            <jnb.Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}>&nbsp;</jnb.Col>
            <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
            <div className="d-grid">
            <Button variant="primary" onClick={navigateToDashboard}>
          Submit
        </Button> 
        </div>
              </jnb.Col>
        
      </jnb.Row>
       
      </jnb.Row>
      </jnb.Container>
    </>
  );
}
