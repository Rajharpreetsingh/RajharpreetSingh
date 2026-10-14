import { Accordion, AccordionTab } from 'primereact/accordion';
import ps from "./ps.jpg";
import ws from "./ws.jpg";
import frs from "./frs.jpg";
import tks from "./tks.jpg";
import phps from "./phps.png";

export default function Skills()
{
    return(
        <>
         
    
    <br/>
    <hr></hr>
        <center>
            <h3>Technical Skills</h3>
        </center>
     <div className="card">
            <Accordion activeIndex={null}>
                <AccordionTab header="Programming Languages">
                    <img src={ps} style={{width:"54rem", height:"13rem"}}/>
                    <p>
                   C C++ JAVA PHP PYTHON JAVASCRIPT
                  </p>
                </AccordionTab>
                <AccordionTab header="Desktop App Development">
                     <img src={tks} style={{width:"20rem", height:"5rem"}}/>
                    <p>
                  TKinter Custom Tkinter
                  </p>
                </AccordionTab>
                <AccordionTab header="Web Technologies">
                   <img src={ws} style={{width:"18rem", height:"10rem"}}/>
                     <p>
                       HTML   CSS  JavaScript
                  </p>
                </AccordionTab>

                   <AccordionTab header="Frontend">
                     
                    <img src={frs} style={{width:"16rem", height:"8rem"}}/>
                    <p>
                  React  Bootstrap  Tailwind
                  </p>
                </AccordionTab>

                   <AccordionTab header="Backend">
                    <img src={phps} style={{width:"14rem", height:"8rem"}}/>
                     <p>
                    PHP
                  </p>
                </AccordionTab>

            </Accordion>
            <hr/>
        </div>
        <center>
            <h3>Additional Skills</h3>
        </center>
        <div>
           
           <Accordion activeIndex={null}>
                <AccordionTab header="Game Development">
                    <p className="m-0">
                     Game Development Using Unity Game Engine
                    </p>
                </AccordionTab>
                <AccordionTab header="Video-Editing">
                    <p className="m-0">
                       Video-Editing Using Sony Vegas Pro
                    </p>
                </AccordionTab>
                <AccordionTab header="Version Control">
                    <p className="m-0">
                        
                    Version Control Using Git, GitHub

                    </p>
                </AccordionTab>

                   <AccordionTab header="Audio-Dubbing">
                    <p className="m-0">
                        
                    Audio-Dubbing Using Audacity
                    </p>
                </AccordionTab>

                <AccordionTab header="3D-Modelling">
                    <p className="m-0">
                    3D-Modelling Using Blender
                    </p>
                </AccordionTab>

                <AccordionTab header="UI/UX Design">
                    <p className="m-0">
                     UI/UX Design Using Figma
                    </p>
                </AccordionTab>

                <AccordionTab header="MS office">
                    <p className="m-0">
                     Mircosoft Excel, Powerpoint presentation , Mircosoft Word
                    </p>
                </AccordionTab>

            </Accordion>
        </div>
   
         
        </>
    )
}