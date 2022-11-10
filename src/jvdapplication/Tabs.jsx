// import React, { useState } from "react";
// import * as HERBUI from "react-bootstrap";
// import FormHeader from "../Header/FormHeader";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import EmployeeDetails from "../Components/EmployeeDetails";
// import { BiIdCard, BiDetail } from "react-icons/bi";
// import "../herbess.css";
// import { FormikProvider, useFormik } from "formik";
// import {  AddressDetailsIntialValues, readOnlyFields} from "../store/reducers/InitialValues";
// import { useHistory } from "react-router-dom";
// import Footer from "../Footer/Footer";

// import PermanentAddressEdit from "../Components/PermanentAddressEdit";
// import CommunicationAddressEdit from "../Components/CommunicationAddressEdit";

// export default function AddressDetailsMain () {
//   const [index, setIndex] = useState(1);
//   const history = useHistory();
//   const formik = useFormik({
//     initialValues: Object.assign(AddressDetailsIntialValues, {
//       readOnlyFields: readOnlyFields,
//     }),
//     onSubmit: (values) => {
//     },
//   });
  
//   return (
//     <>
//       <FormikProvider value={formik}>
//         <FormHeader formHeading=""></FormHeader>
//         <HERBUI.Container>
//           <HERBUI.Row>
//             <HERBUI.Col xs={12} sm={12} md={12} lg={12} xl={12}  xxl={12} className="page-titlespacing" >
//               <div className="inner-herbpage-service-title1">
//                 <h1>Student Education Details</h1>
//               </div>
//             </HERBUI.Col>
//           </HERBUI.Row>
//         </HERBUI.Container>
//         <HERBUI.Container className="outer-page-content-container ">
//           <div>
//             <button  type="button" className="btn btn-outline-primary btn-sm align-item-start" onClick={()=>history.goBack()} >
//              Back
//             </button></div>
//             <EmployeeDetails />
//               <div>
//                 <Tabs>
//                   <TabList>
//                     <Tab onClick={() => setIndex(1)}>
//                       <BiIdCard className="tabicon" />
//                       Permanent Address
//                     </Tab>
//                     <Tab onClick={() => setIndex(2)}>
//                       <BiDetail className="tabicon" />
//                       Communication Address
//                     </Tab>
//                     {/* <Tab onClick={() => setIndex(3)}>
//                       <BiHome className="tabicon" />
//                       Home Town Address
//                     </Tab> */}
//                   </TabList>
//                   <TabPanel>aa
//                     {/* <PermanentAddressEdit formIk={formIk}  /> */}
//                   </TabPanel>
//                   <TabPanel>bb
//                     {/* <CommunicationAddressEdit formIk={formIk}  /> */}
//                   </TabPanel>
//                   {/* <TabPanel>
//                     <HomeTownEdit formik={formik} />
//                   </TabPanel> */}
//                 </Tabs>
//             </div>
//         </HERBUI.Container>
//       </FormikProvider>
//       <Footer />
//     </>
//   );
// };

