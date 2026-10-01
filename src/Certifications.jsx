import React from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import c1Image from './c1.png'; 
import c2aImage from './c2-a.png'; 
import c2bImage from './c2-b.png'; 
import c3Image from './c3.png'; 
import c4Image from './c4.png'; 


export default function Certifications()
{
    return(
        <>
         <center>
            <h2>Certifcations</h2>
         </center>

         <div className="card">
                     <br></br>
                      
                     <BlockUI >
                        
                     <Panel header="Introduction to Object-Oriented Programming in C++, University of London"> 
                 
               <center>
                     <a href="https://www.coursera.org/account/accomplishments/certificate/2W6VG46WPFJH">
                     <img src={c1Image} style={{height:"80vh",width:"100vh"}}></img>
                     </a>
                   
                </center>



             
                            
                         </Panel>
<Panel header="An Introduction to Interactive Programming in
Python (Part 1)
">

            <center>
     <a href="https://www.coursera.org/account/accomplishments/verify/NLG5DFDRKG89">
     <img src={c2aImage} style={{height:"80vh",width:"100vh"}}></img>
   </a>
  </center>
</Panel>


<Panel header="An Introduction to Interactive Programming in
Python (Part 2)
">

<center>
     <a href="https://www.coursera.org/account/accomplishments/verify/HUNYGFHN1XMN">
     <img src={c2bImage} style={{height:"80vh",width:"100vh"}}></img>
   </a>
  </center>
</Panel>      
                        
                        
<Panel header="React JS Fundamentals | Infosys SpringBoard  (Click Certificate and Scan the QR Using Phone to verify)">
    <center>
     <a href="https://verify.onwingspan.com/">
     <img src={c3Image} style={{height:"80vh",width:"100vh",border:"solid #B2B3B5 7px"}} ></img>
   </a>
        </center>  
</Panel>


<Panel header="Data Structures and Algorithms Fundamentals| Infosys SpringBoard  (Click Certificate and Scan the  QR Using Phone to verify)">
  <center>
     <a href="https://verify.onwingspan.com/">
     <img src={c4Image} style={{height:"80vh",width:"100vh",border:"solid #B2B3B5 7px"}} ></img>
   </a>
       </center>   
</Panel>


         
</BlockUI>
          </div>

        </>
    )
}