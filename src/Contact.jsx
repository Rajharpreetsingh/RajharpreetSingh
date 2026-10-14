
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';

export default function TemplateDemo() {
    

    return (
        
        <div className="card">
            <br></br>
             
            <BlockUI >
                <Panel header="Contact Details">
                    <span>📞<strong>Phone Number:</strong>+91  9682599483</span>
                     <br/>
                     <br/>
                     <span>✉️ <strong>Email:</strong><a href="rajharpreetinki@gmail.com">rajharpreetinki@gmail.com</a></span>
                     <br/>
                     <br/>
                     <span>🏠<strong>Address:</strong>S 15, Rampur Road, Haldwani, Near Water Tank, Olivia Colony, VTC Dewalchore, PO Dewalchore, Sub-District Haldwani, District Nainital, Uttarakhand – 263139</span>
                     
                </Panel>
                

            </BlockUI>
        </div>
    );
}
        