
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import PageTransition from './PageTransition';

import { Button } from 'primereact/button';
        
import { InputTextarea } from 'primereact/inputtextarea';
        
import { InputText } from 'primereact/inputtext';
        
import { Panel } from 'primereact/panel';

export default function TemplateDemo() {
        // {/* <span>📞<strong>Phone Number:</strong>+91  9682599483</span>
        //              <br/>
        //              <br/>
        //              <span>✉️ <strong>Email:</strong><a href="rajharpreetinki@gmail.com">rajharpreetinki@gmail.com</a></span>
        //              <br/>
        //              <br/>
        //              <span>🏠<strong>Address:</strong>S 15, Rampur Road, Haldwani, Near Water Tank, Olivia Colony, VTC Dewalchore, PO Dewalchore, Sub-District Haldwani, District Nainital, Uttarakhand – 263139</span> */}

    return (
         <PageTransition>
        <div className="card">
            <br></br>
             
            <BlockUI >
                <Panel header="Contact me">
                    <center>
                    <form method="post" action="#">
                        
                             <InputText placeholder="Name"  />
                             <br></br>
                               <br></br>
                            <InputText  placeholder="Email" />

                            <br></br>
                                <br></br>
                             
                            <InputTextarea  rows={5} cols={30} />
                              <br></br>
                                <br></br>
                               <Button label="Send" />
                            

                     </form>  
                     </center>   
                </Panel>
                

            </BlockUI>
        </div>
        </PageTransition>
    );
}
        