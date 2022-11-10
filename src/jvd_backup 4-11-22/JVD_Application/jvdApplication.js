import React from 'react'

import * as jnb from "react-bootstrap"; 
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useState } from "react";
import StudentDetails from './StudentDetails';
import StudentEDucationDetails from './StudentEDucationDetails';
import Header from '../../Header/Header';
import { useBetween } from "use-between";
import useCounter from "./allTags";

function useSharedCounter() { return useBetween(useCounter);}
export default function JvdApplication() {
   
    const { tabDetails,setTabDetails} = useSharedCounter();



  return (
    <div>
        <Header/>
        <div className="main_section">  </div>
     <jnb.Container >
          <jnb.Row >
                   <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing">
                        <div className="inner-herbpage-service-title1">
                            {/* <h1>Form of Application For Service Pension / Family Pension / Retirement Gratuity / <br/>Service Gratuity  / Commutation</h1> */}
                            <h1>Fresh On-Boarding Of A Student</h1>
                        </div>
                    </jnb.Col> 
          </jnb.Row>
        </jnb.Container>
        <jnb.Container  >
        <jnb.Row  >
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Student UID Number:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
503296866016
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Student Name:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
Naga Veera Tarun
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>DOB:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
05-02-2002
       </jnb.Col>
       <br/>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Father Name:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
Koteswara Rao    
   </jnb.Col>
   <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Mother Name:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
Sivamma
       </jnb.Col>  
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Social Status:</b>
       </jnb.Col>   
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
BC-B
       </jnb.Col> 
       <br/>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>District:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
Prakasam
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Mandal:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
Chirala
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
<b>Village:</b>
       </jnb.Col>
       <jnb.Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
Chirala
       </jnb.Col>
       </jnb.Row>
 <div>
                <Tabs     
                  defaultActiveKey={tabDetails.currentTab}
                  activeKey={tabDetails.currentTab}
                 onSelect={(event) => {return setTabDetails({ currentTab: event });}}>
                    
                    <TabList>
                        <Tab   eventKey="StudentDetails"  >
                            Student Details
                        </Tab>
                        <Tab  eventKey="StudentEDucationDetails">
                            Student Educational Details
                        </Tab>
                    </TabList>
                    <TabPanel 
                   >
                        <StudentDetails></StudentDetails>
                    </TabPanel>
                    <TabPanel 
                   >
                        <StudentEDucationDetails></StudentEDucationDetails>
                    </TabPanel>
                </Tabs>
                
            </div>

        </jnb.Container>

        
    </div>
  )
}
