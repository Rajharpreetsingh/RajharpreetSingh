
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';

export default function TemplateDemo() {
    

    return (
        
        <div className="card">
            <br></br>
             
            <BlockUI >
                <Panel header="Phone Number">
                    <span>+91  9682599483</span>
                </Panel>
                <Panel header="Email ">
                         <span><a href="rajharpreetinki@gmail.com">rajharpreetinki@gmail.com</a></span>
                </Panel>
                <Panel header="Address">
                       <span>S 15, Rampur Road, Haldwani, Near Water Tank, Olivia Colony, VTC Dewalchore, PO Dewalchore, Sub-District Haldwani, District Nainital, Uttarakhand – 263139</span>
                </Panel>

            </BlockUI>
        </div>
    );
}
        