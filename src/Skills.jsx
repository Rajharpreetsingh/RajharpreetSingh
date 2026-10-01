import { Accordion, AccordionTab } from 'primereact/accordion';



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
                    <p className="m-0">
                    C, C++, Java, Python, PHP, JavaScript
                    </p>
                </AccordionTab>
                <AccordionTab header="Desktop App Development">
                    <p className="m-0">
                       Tkinter, Custom Tkinter
                    </p>
                </AccordionTab>
                <AccordionTab header="Web Technologies">
                    <p className="m-0">
                        
                    HTML, CSS, JS 
                    </p>
                </AccordionTab>

                   <AccordionTab header="Frontend">
                    <p className="m-0">
                        
                     ReactJS, Bootstrap CSS, Tailwind CSS
                    </p>
                </AccordionTab>

                   <AccordionTab header="Backend">
                    <p className="m-0">
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