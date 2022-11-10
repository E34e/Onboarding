import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { Button, Card, Col, FormGroup, Row } from "react-bootstrap";
import * as Yup from "yup";
import * as jnb from "react-bootstrap"; 
import { eduDEtailsFormik, eduDEtailsValidation } from "./studentDetailsValidations";

// import Header from "../Header/Header";


export default function StudentEDucationDetails() {
    

  const formIk = useFormik({
    enableReinitialize: true,
    initialValues: eduDEtailsFormik,
    onSubmit: (values) => {
        console.log(values);
       alert(JSON.stringify(values));
 
    
     },
    // onSubmit: (values) => {
    //     alert("Submit",values);
    //     console.log(values);
   
    // },
    validationSchema: eduDEtailsValidation,
  });
 
      const [showcapCategory, setCapCategory] = useState();
    
      function getCap(event)
      {
        setCapCategory(event.target.checked);
          
      }
      const [showsportCategory, setSportCategory] = useState();
    
      function getSport(event)
      {
        setSportCategory(event.target.checked);
          
      }
      const [shownccCategory, setNccCategory] = useState();
    
      function getNcc(event)
      {
        setNccCategory(event.target.checked);
          
      }
      const [shownssCategory, setNssCategory] = useState();
    
      function getNss(event)
      {
        setNssCategory(event.target.checked);
          
      }
      const [showcurricular, setCurricular] = useState();
    
      function getCurricular(event)
      {
        setCurricular(event.target.checked);
          
      }
      const [showCetValue, setCetValue] = useState(false);
    
      function getCetDetails(event)
      {
      console.log("cet",event.target.value);
        if(event.target.value !='000')
            setCetValue(true);
      }
      function clrCap()
        {
          eduDEtailsFormik.setFieldValue("capOption","");
          eduDEtailsFormik.setFieldValue("capCertificate","");
          
         
        }
  return (
    <div>
         {/* <Header /> */}
     <div className="main_section">  </div>
    
      <FormikProvider value={formIk}>
        <Form onSubmit={formIk.handleSubmit}>
        <jnb.Container>
          <jnb.Row >
                   <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                          
                            <h1>Educational Details</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>
          </jnb.Container>
          <jnb.Container className="outer-page-content-container">
            <div className="jumbotron mt20 form-card-jnb" style={{ marginTop: "5px" }}>
                <jnb.Row className="px-5 pt-5">
              <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Board/University Name :</b></span>
                <Field as="select" className="form-control" name="universityname">
                  <option value="0">--Select--</option>
                  <option value="1">RGUKT</option>
                  <option value="2">AU</option>
                </Field> 
                     <ErrorMessage name="universityname" component="div" className="text-error" />
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
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                 <span className="label-text-style"><b> Admission Category:&nbsp;</b></span>
                
                <Field as="select" className="form-control" name="admissionCategory" >
                  <option value="00">Select</option>
                  <option value="11">RE Admission</option>
                  <option value="22">Attendence Excemption</option>
                  <option value="33">Spot Admission</option>
                  <option value="44">Management Admission</option>
                  <option value="00">Management Admission</option>

                </Field> 
            <ErrorMessage name="admissionCategory" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
         
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>College Name:</b></span>&nbsp;&nbsp;
                
                <Field as="select" className="form-control" name="clgname">
                  <option value="00">--Select--</option>
                  <option value="11">RGUKT-Nuzvid</option>
                  <option value="22">Geetham</option>
                </Field> 
                     <ErrorMessage name="clgname" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
         
       
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>   Course/Group :</b></span>
                <Field component="select" className="form-control" name="course" onChange={(e) => {getCetDetails(e);}}>
                  <option value="SELECT">--------</option>
                <option value="000">Select</option>
                  <option value="111">BSC</option>
                  <option value="222">Bcom</option>
                  <option value="333">CIVIL</option>
                </Field>
                     <ErrorMessage name="course" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
        
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b> Year of study:</b></span>
                
                <Field as="select" className="form-control" name="year">
                  <option value="00">--Select--</option>
                  <option value="11">First year</option>
                  <option value="22">Second Year</option>
                  <option value="33">Third Year</option>
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
           {/* <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Admission Category: </b></span>
                     
                <Field as="select" className="form-control" name="category">
                  <option value="000">--select--</option>
                  <option value="111">Category1</option>
                  <option value="222">Category2</option>
                </Field>
                     <ErrorMessage name="category" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col> */}
            <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>Second Language: </b></span>
                     
                <Field as="select" className="form-control" name="secondLanguage">
                  <option value="">--Select--</option>
                  <option value="111">Arabic</option>
                  <option value="222">Hindi</option>
                  <option value="333">French</option>

                </Field>
                     <ErrorMessage name="secondLanguage" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
           </jnb.Row >
           <jnb.Row className="px-5 pt-3" >
          
          
         
{/*         
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Admission Date:</b></span>
              <Field
                type="date"
                name="admissiondate2"
                className="form-control"/>
            <ErrorMessage name="admissiondate2" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col> */}
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
        
           </jnb.Row>
           {showCetValue && (<>
           <jnb.Row className="px-5 pt-4">
      <div className="inner-herbpage-service-title-sub" >
            <h1>CET Details</h1>
        </div> 
        </jnb.Row>
       
        <jnb.Row className="px-5 pt-4">
        <div className="form-card-jnb">
        <jnb.Row className="px-5 pt-4">

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
                 <jnb.InputGroup className="mb-4p5">
                     <span className="label-text-style"><b>CET Name : </b></span>
                     
                <Field as="select"  className="form-control" name="cetName" >
                  <option value='000'>--Select--</option>
                  <option value="111">ECET</option>
                  <option value="222">EDCET	</option>
                </Field>
                     <ErrorMessage name="cetName" component="div" className="text-error" />
                 </jnb.InputGroup>
           </jnb.Col>
          
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>CET Hall-Ticket No.</b></span>
             
                <Field type="text" name="cetHallTicket" className="form-control" />
            <ErrorMessage name="cetHallTicket" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>CET Pass Year</b></span>
             
                <Field type="text" name="cetPassYear" className="form-control" />
            <ErrorMessage name="cetPassYear" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
          </jnb.Row> 
        </div>  </jnb.Row></>)}


             {/* ********************** special category************************ */}
             <jnb.Row className="px-5 pt-4">
        <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
            <h1>Select Special Category if Applicable</h1>
        </div>
        <div className="form-card-jnb" style={{ marginTop: "5px" }}>
       
        <jnb.Row className="px-5 pt-5">
        <jnb.Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2}>
            <jnb.InputGroup className="mb-4p5">
            <Field type="checkbox" name="isCap" onClick={(e) => {getCap(e)}}/>
                      <label>&emsp;Cap Category</label>
              </jnb.InputGroup>

            </jnb.Col>
           {showcapCategory && (<>
            <jnb.Col xs={12} sm={12} md={12} lg={3}  xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
            {/* <span className="label-text-style"><b>Cap </b></span> */}
             <Field as="select" className="form-control" name="capOption">
                  <option value="000">--Select--</option>
                  <option value="111">Priority-I</option>
                  <option value="222">Priority-II</option>
                  <option value="111">Priority-III</option>
                  <option value="222">Priority-IV</option>
                </Field>
                     <ErrorMessage name="capOption" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           
          
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             {/* <span className="label-text-style"><b>Cap  Certificate Upload</b></span> */}
             <label>Cap Certificate Upload : </label>
             </jnb.InputGroup></jnb.Col> 
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup>
             {/* <span className="label-text-style"><b>Cap  Certificate Upload</b></span> */}
           
             <Field type="file" className="form-control" name="capCertificate">
                
                </Field>
                     <ErrorMessage name="capCertificate" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col> 
           
           </>)}
          
          </jnb.Row>

          <jnb.Row className="px-5 pt-5">
        <jnb.Col xs={12} sm={12} md={12} lg={12} xl={2} xxl={2}>
            <jnb.InputGroup className="mb-4p5">
            <Field type="checkbox" name="isSport" onClick={getSport}/>
                      <label>&emsp;Sport Category</label>
              
              </jnb.InputGroup></jnb.Col>

              {showsportCategory && (<>
              <jnb.Col xs={12} sm={12} md={12} lg={12}  xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
            {/* <span className="label-text-style"><b>Sport</b></span> */}
             <Field as="select" className="form-control" name="sportOption">
                  <option value="000">--Select--</option>
                  <option value="111">National</option>
                  <option value="222">International</option>
                </Field>
                     <ErrorMessage name="sportOption" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             {/* <span className="label-text-style"><b>Cap  Certificate Upload</b></span> */}
             <label><b>Sport Certificate Upload :</b></label>
             </jnb.InputGroup></jnb.Col> 

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
          
             <Field type="file" className="form-control" name="sportCertificate">
                
                </Field>
                     <ErrorMessage name="sportCertificate" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           </>)}

              
          
          </jnb.Row>

          <jnb.Row className="px-5 pt-5">
        <jnb.Col xs={12} sm={12} md={12} lg={1} xl={2} xxl={2}>
            <jnb.InputGroup className="mb-4p5">
            <Field type="checkbox" name="isNcc" onClick={getNcc} />
                      <label>&emsp;NCC Category:</label>
              
              </jnb.InputGroup></jnb.Col>

              {shownccCategory && (<>
              <jnb.Col xs={12} sm={12} md={12} lg={3}  xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
            {/* <span className="label-text-style"><b>NCC</b></span> */}
             <Field as="select" className="form-control" name="nccOption">
                  <option value="000">--Select--</option>
                  <option value="111">A Certificate</option>
                  <option value="222"> B Certificate</option>
                  <option value="333"> C Certificate</option>
                 
                </Field>
                     <ErrorMessage name="nccOption" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             {/* <span className="label-text-style"><b>Cap  Certificate Upload</b></span> */}
             <label><b>NCC Certificate Upload :</b> </label>
             </jnb.InputGroup></jnb.Col> 
           

           <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
            
             <Field type="file" className="form-control" name="nccCertificate">
                
                </Field>
                     <ErrorMessage name="nccCertificate" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           </>)}
          </jnb.Row>

          <jnb.Row className="px-5 pt-5">
        <jnb.Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
            <Field type="checkbox" name="isNss" onClick={getNss}/>
                      <label>&emsp;NSS Category:</label> &nbsp;
              
              </jnb.InputGroup></jnb.Col>
              {shownssCategory && (<>
                <jnb.Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             {/* <span className="label-text-style"><b>Cap  Certificate Upload</b></span> */}
             <label><b>NSS Certificate Upload :</b> </label>
            </jnb.InputGroup></jnb.Col> 
           <jnb.Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
          
             <Field type="file" className="form-control" name="nssCertificate">
                
                </Field>
                     <ErrorMessage name="nssCertificate" component="div" className="text-error" />
            </jnb.InputGroup>

           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4}></jnb.Col></>)}
          </jnb.Row>
          <jnb.Row className="px-5 pt-5">
        <jnb.Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
            <Field type="checkbox" name="isExCurricular" onClick={getCurricular}/>&nbsp;&nbsp;
                      <label>ExtracurricularActivity</label>
              
              </jnb.InputGroup></jnb.Col>
              {showcurricular && (<>
                <jnb.Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5"> &emsp;
             {/* <span className="label-text-style"><b>Cap  Certificate Upload</b></span> */}
             <label><b> Extracurricular Activity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>Certificate Upload :</b></label>
             </jnb.InputGroup></jnb.Col> 
              <jnb.Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
            
             <Field type="file" className="form-control" name="extraActivityCertify">
                
                </Field>
                     <ErrorMessage name="extraActivityCertify" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
           <jnb.Col xs={12} sm={12} md={12} lg={12} xl={3} xxl={3}></jnb.Col></>)}
          </jnb.Row>
       
        
        </div> </jnb.Row>
        <jnb.Row className="px-5 pt-3">
        <div className="inner-herbpage-service-title-sub"  style={{marginTop:'-30px'}}>
      
            <h1>Student Other Details</h1>
        </div>
        <div className="form-card-jnb" style={{ marginTop: "5px" }}>
        <jnb.Row className="px-5 pt-3">
          <jnb.Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3}>
            <jnb.InputGroup className="mb-4p5">
             <span className="label-text-style"><b>Income Certificate No: </b></span>
             <Field
                type="text"
                name="incomeCertify"
                className="form-control" 
              />
            <ErrorMessage name="incomeCertify" component="div" className="text-error" />
            </jnb.InputGroup>
           </jnb.Col>
          </jnb.Row>
        </div></jnb.Row></div>
        
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
      </jnb.Container>    
      

      </Form>
      </FormikProvider>
    
    </div>
    
  )
}
