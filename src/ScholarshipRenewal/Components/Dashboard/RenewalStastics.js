import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import PieComponent from "./PieComponet";
import { Field, Form, FormikProvider, useFormik } from "formik";
import localStorage from "redux-persist/es/storage";
import useCounter from "./useStatesData.js";
import { useBetween } from "use-between";
import Header from "../../../Header/Header";
import * as jnb from "react-bootstrap"; 
import ConfirmstudentDetails from "./ConfirmstudentDetails";
import LoadingService from "../Api's/LoadingService";
import PieChart from "./PieComponet";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import DataTable from "react-data-table-component";
function useSharedCounter() {
  return useBetween(useCounter);
}

export default function RenewalStastics() {
  const { show, setShow } = useSharedCounter();

  function refreshPage() {
    window.location.reload(false);
  }
  //let studentid = localStorage.getItem("student_id");
  //let hallTicket = localStorage.getItem("hallTicket");
  //let scholarType = localStorage.getItem("scholarType");
  //let course = localStorage.getItem("course");
  //let percentage = localStorage.getItem("percentage");

  //alert(hallTicket);

  const [studentInfo, setstudentInfo] = useState([]);

  const [payLoad, setPayLoad] = useState([]);

  const [studentId, setStudentId] = useState();

  const [courseYear,setCourseYear] = useState();
  const [courseName,setCourseName] = useState();

  const navigate = useNavigate();
  const payLoadValues = {
    student_id: "",
    course_id: "",
    year: "",
    choose: "",
    student_name: "",
    parentsname: "",
    caste: "",
  };
  const formIk = useFormik({
    enableReinitialize: true,
    initialValues: payLoadValues,

    onSubmit: (values) => {
      console.log(studentInfo.length);

      for (var i = 0; i < studentInfo.length; i++) {
        //alert(Object.keys(data.shareInfo[i]).length);
        payLoadValues.course_id = values.course_id;
        payLoadValues.year = values.year;
        payLoadValues.caste = studentInfo[i].caste;
        payLoadValues.student_id = studentInfo[i].student_id;
        payLoadValues.student_name = studentInfo[i].student_name;
        payLoadValues.parentsname = studentInfo[i].parentsname;
        payLoadValues.choose = true;

        console.log(studentInfo[i].student_id);

        setPayLoad([...payLoad, payLoadValues]);
      }
      console.log(JSON.stringify(payLoad));

      LoadingService.saveData(payLoad)
        .then((res) => {
          if (res.data) {
            if (res.data !== null) {
              alert("Inserted Successfully!.");
  navigate("/uploadsupportives");
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
          console.log("Exception Occured ");
        });
    },
  });

  //Added
  const [showDetails, setDetails] = useState("");
 useEffect(() => {
   

    const dataPromise = localStorage.getItem("studentData");
 
    dataPromise.then(data => {
          console.log(data);
    });

axios
      .get("http://172.16.150.61:8302/jnbap/promotestudents")
      .then((response) => {
        setDetails(response.data);
      });
  }, []);

 

  const [showPendingData, setPendingData] = useState(false);
  function pendingFunc(coursename,courseyear) {
    setCourseYear(courseyear);
    setCourseName(coursename);
    setPendingData(true);
  }
  //---------------------------------------------------------------//

  const handleRowSelected = React.useCallback(state => {
    let cfmsId = state.selectedRows.map((row) =>{
     // setShow(true)
     handleShow()
      localStorage.setItem("id",row.student_id)
    })
  }, []);
  // --------------------------------For navigation ------------------------------------------------- 

  const navigatetoNotPromote = () => {
    navigate("/demote");
  };


 
  //-----------------------For studentdetails  loop -------------------------
  const [courseid, setcourseid] = useState([]);
  const [year, setyear] = useState([]);
  const [studentdata, setstudentdata] = useState([]);
  function Studentdetails() {
    let regUrl =
      // "http://172.16.150.61:8302/jnbap/" + courseid + "/" + year + "/students";
      // "https://mocki.io/v1/61f289c5-1fa7-41a2-a4e5-bc0c8126a540"
      "https://mocki.io/v1/eda45a34-f3aa-4ecf-bdc9-fca94c271c9b"
    axios.get(regUrl).then((response) => {
      setstudentdata(response.data);
    });
  }

  useEffect(() => {
    Studentdetails();
  }, [courseid, year]);

  //  FOR MODAL POP - UP //
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);






  const columns = [
    {
        name: 'Id',
        // cell: (row, index) => row.sno,
        selector: row => row.student_id,
        grow: '50'
        
    },
    {
        name: 'studentId',
        selector: row => row.student_id,
        grow: '50'
    },
    {                       
        name: 'parentsname',
        selector: row => row.parentsname,
        grow: '100'
    },
    {
        name: 'caste',
        selector: row => row.caste,
        grow: '200'
    },
  ]





  const tableData = {
    columns,
    studentdata
};
  

return (
    <>
      <Header />
      <FormikProvider value={formIk}>
        <Form onSubmit={formIk.handleSubmit}>
        <jnb.Container >
          <jnb.Row >
                   <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                            {/* <h1>Form of Application For Service Pension / Family Pension / Retirement Gratuity / <br/>Service Gratuity  / Commutation</h1> */}
                            <h1>Total Eligible Students</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>
        </jnb.Container>
        <jnb.Container className="outer-page-content-container " >
        <jnb.Row className="p-4">
            <jnb.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                   <PieChart></PieChart>
              </jnb.Col>
              <jnb.Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
              <div>
                    <center>
                      <table
                       className="table table-condensed table-bordered table-striped table-hover table-container"
                       style={{
                         //width: "100%",
                         maxHeight:'280px',
                         maxWidth:'420px',
                         //height: "65vh",
                         overflow: "scroll",
                       display: "inline-block"
                       }}
                      >
                        <thead style={{ fontSize: "14px!important" }}>
                          <tr>
                            <th>S.No</th>
                            <th>Course Id</th>
                            <th>Year</th>
                            <th>Course </th>
                            <th>Promoted</th>
                            <th>Not Promoted</th>
                            <th>Pending</th>
                          </tr>
                        </thead>
                        <tbody>
                          {showDetails &&
                            showDetails.map((stud, i) => {
                              return (
                                <>
                                  <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{stud.course_id}</td>
                                    <td>{stud.year}</td>
                                    <td>{stud.course}</td>
                                    <td>{stud.promoted}</td>
                                    <td>{stud.notpromoted}</td>
                                    <td>
                                      <a style={{cursor: "pointer"}} className="text-primary" onClick={()=>{pendingFunc(stud.course,stud.year)}}>
                                        {stud.pending}
                                      </a>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                        </tbody>
                      </table>
                    </center>
                  </div>
             </jnb.Col>
              </jnb.Row>


              {showPendingData === true ? (
              <>
                
              <jnb.Row id="pendingId">
                  <jnb.Col sm={6}>
                    <b>Course:&nbsp;
                    <input type="text" value={courseName} className="text-primary"/>
                     
                      </b>
                  </jnb.Col>

                  <jnb.Col xs={6}>
                    <b>Course Year: &nbsp;
               <input type="text" value={courseYear} className="text-primary" />    
                    </b>
            </jnb.Col>
                </jnb.Row>
              </>
            ) : (
              <></>
            )}
       
     
<pre></pre>
{showPendingData === true ? (
              <>
<DataTable
                                                columns={columns}
                                                pagination={true}
                                                paginationPerPage="100"
                                                persistTableHead={true}
                                                onSelectedRowsChange={handleRowSelected}
                                         
                                                // selectableRowDisabled={handledisabled}
                                                data={studentdata}
                                                keyField="cfmsid"
                                                fixedHeader
                                                 fixedHeaderScrollHeight='600px' 
                                                highlightOnHover selectableRows
                                           />
                                           
 
                     <jnb.Modal size="lg" show={show} onHide={handleClose}>
                     <Modal.Header closeButton>
                       <Modal.Title>Edit Student Details</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                       <ConfirmstudentDetails></ConfirmstudentDetails>
                     </Modal.Body>
                     <Modal.Footer></Modal.Footer>
                   </jnb.Modal>         
     <jnb.Row className="p-4">
            <jnb.Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={8}>&nbsp;</jnb.Col>
            <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
          <div className="d-grid">
          <Button variant="success"  type="submit">
          Promote
        </Button>
            </div>
              </jnb.Col>
              <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
          <div className="d-grid">
          <Button variant="danger" onClick={navigatetoNotPromote}>
          Do not promote
        </Button>
            </div>
              </jnb.Col>
      </jnb.Row> 
             </>
            ) : (
              <></>
            )}
            


      {/* <jnb.Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Student Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ConfirmstudentDetails></ConfirmstudentDetails>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </jnb.Modal> */}

            {/* </>
          ) : (
            <></>
          )} */}
           </jnb.Container>
        </Form>
      </FormikProvider>
    </>
  );
}
          
           