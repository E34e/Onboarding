
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Field, FormikProvider, useFormik } from "formik";
import Header from "../../../Header/Header";
import * as jnb from "react-bootstrap"; 
export default function Uploadsupportives() {

  const formIk = useFormik({
    initialValues: "upload",
   
    //validationSchema: formikValidation,
  });




  const navigate = useNavigate();
  const navigateToPromote = () => {
    navigate("/promotedlist");
  };


  const [uploadFile, setUploadFile] = useState("")

  const handleFileReader = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      setUploadFile({data:reader.result.split(',').pop(),fileName:event.target.files[0].name})
    };
  }

  const uploadHandler = () => {
    axios.post('https://localhost:5000/uploaded_file', uploadFile)
};

return (
    <>
    
       <Header />
       
    <FormikProvider value={formIk}>
    <form className="form-group" autoComplete="off" onSubmit={uploadHandler} >     
    <div className="main_section">  </div>
      <jnb.Container >
         <jnb.Row >
                    <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                         <div className="inner-herbpage-service-title1">
                             {/* <h1>Form of Application For Service Pension / Family Pension / Retirement Gratuity / <br/>Service Gratuity  / Commutation</h1> */}
                            <h1>Upload Supportives</h1>
                        </div>
                     </jnb.Col> 
          </jnb.Row>
        </jnb.Container>
        <jnb.Container className="outer-page-content-container " >
            <jnb.Row className="p-4">
            <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className=" ">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th
                scope="col"
                style={{ color: "green", borderBottom: "2px solid red" }}
              >
                Upload Supporties
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  Zip all the supporting documents together following the
                  insturctions given below:
                </ul>
                <li>&lt;student-id&gt;-declaration.pdf</li>
                <li>&lt;student-id&gt;-income-certifcate.pdf</li>
                <li>&lt;student-id&gt;-caste-certificate.pdf</li>
              </td>
            </tr>
            <tr>
              <td>
              <Field type="file" name="upload" className="form-control"  onChange={handleFileReader}   accept=".zip,.rar"/>
              </td>
            </tr>
            <tr>
             <td align="right">
             <Button type="submit" className="btn btn-success"  onClick={navigateToPromote}>Submit</Button>
            </td>
            </tr>
            
          </tbody>
        </table>
        </jnb.Col>
        </jnb.Row>
      </jnb.Container>
      </form>
      </FormikProvider>
    </>
  );
}
