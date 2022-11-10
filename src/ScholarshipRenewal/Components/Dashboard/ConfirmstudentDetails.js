import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { Button, Card, Col, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useBetween } from "use-between";
import useCounter from "./useStatesData";
import * as Yup from "yup";
import * as jnb from "react-bootstrap"; 
function useSharedCounter() {
  return useBetween(useCounter);
}

const ConfirmstudentDetails = () => {
  const { show, setShow } = useSharedCounter();

  let studentId = localStorage.getItem("student_id");
  //const [hallTicket, setHallticket] = useState();
  ///const [student_id, setStudentId] = useState();;;'''''''
  ///const [scholarType, setscholarType] = useState();
  //const [course, setcourse] = useState();
  //const [percentage, setpercentage] = useState();
  const navigate = useNavigate();
  const navigatetodashboard = () => {
    navigate("/dashboard");
  };

  const validation = Yup.object().shape({
    hallticket : Yup.string().required( " Enter hall ticket number")
    .matches(/^[0-9]*$/, "Enter Numbers only "),
    scholarType : Yup.string().required( "Select Scholar Type"),
    course: Yup.string().required( "Please select Course"),
    percentage: Yup.string().required( " Enter Previous year percentage")
    .matches(/^[0-9]+$/, "Enter Numbers only "),  
});
  //   const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  //const handleShow = () => setShow(true);
  //const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);


  const modalFormik = useFormik({
    initialValues: {
      student_id: studentId,
      hallticket: "",
      scholarType: "",
      course: "",
      percentage: "",
    },
    onSubmit: (values) => {
       console.log(values);
      alert(JSON.stringify(values));
      localStorage.setItem("studentData", JSON.stringify(values));

      // localStorage.setItem("hallTicket", JSON.stringify(values.hallticket));
      // setHallticket(values.hallticket);
      // localStorage.setItem("scholarType", JSON.stringify(values.scholarType));
      // setscholarType(values.scholarType);
      // localStorage.setItem("course", JSON.stringify(values.course));
      // setcourse(values.course);
      // localStorage.setItem("percentage", JSON.stringify(values.percentage));
      // setpercentage(values.percentage);
    },
    validationSchema:validation,
    
  });
  const handleClose = () => setShow(false);
  return (
    <FormikProvider value={modalFormik}>
      <Form onSubmit={modalFormik.handleSubmit} onChange={modalFormik.handleChange}>
     
          <jnb.Row>
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
              <FormGroup className="form-group">
                <label className="control-label star" id="student_id" >
                  Student Id: &nbsp;&nbsp;&nbsp;&nbsp;
                  <b>{studentId}</b>{" "}
                </label>
              </FormGroup>
            </jnb.Col>
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
              <FormGroup className="form-group">
                <label className="control-label star">
                  Previous Hall Ticket No :
                </label>
                <Field
                  type="text"
                  name="hallticket"
                  className="form-control"
                  maxLength="10"
                  minLength="10"
                  //value={showEventUploads.value[0].event_name}'
                />
                <ErrorMessage name="hallticket" component="div" className="fa fa-exclamation-triangle text-danger"/>
              </FormGroup>
            </jnb.Col>
          </jnb.Row>
          <jnb.Row>
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
              <FormGroup className="form-group">
                <label className="control-label star">Scholarship Type </label>
                <Field as="select" className="form-control" name="scholarType">
                  <option value="">--Select--</option>
                  <option value="Day-Scholar">Day Scholar</option>
                  <option value="Regular">Regular</option>
                </Field> 
                <ErrorMessage name="scholarType" component="div" className="fa fa-exclamation-triangle text-danger"/>
              </FormGroup>
              </jnb.Col>
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
              <FormGroup className="form-group">
                <label className="control-label star">Course</label>
                <Field as="select" className="form-control" name="course">
                  <option value="">--Select--</option>
                  <option value="BBA">BBA</option>
                  <option value="BSC">BSC</option>
                </Field>
                <ErrorMessage name="course" component="div" className="fa fa-exclamation-triangle text-danger"/>
              </FormGroup>
              </jnb.Col>
          </jnb.Row>
          <jnb.Row>
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
              <FormGroup className="form-group">
                <label className="control-label star">
                  Previous Course Percentage
                </label>
                <Field type="text" name="percentage" className="form-control" maxLength="4" />
                <ErrorMessage name="percentage" component="div" className="fa fa-exclamation-triangle text-danger"/>
              </FormGroup>
              </jnb.Col>
          </jnb.Row>
<br/>
<jnb.Row>
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <button
            type="submit"
            className="btn btn-success pull-right submitButton"
            variant="success"
            //gggonClick={handleClose}
          >
            Confirm &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          </button>

          {/* <Button onClick={handleClose}>hi</Button> */}
          </jnb.Col>
          </jnb.Row>
      </Form>
    </FormikProvider>
  );
};
export default ConfirmstudentDetails;
