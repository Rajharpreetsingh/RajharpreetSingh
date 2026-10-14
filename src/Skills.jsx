import { Accordion, AccordionTab } from 'primereact/accordion';
import { Panel } from 'primereact/panel';
import ps from "./ps.jpg";
import ws from "./ws.jpg";
import frs from "./frs.jpg";
import tks from "./tks.jpg";
import phps from "./phps.png";
import "./Skills.css";

export default function Skills() {
return (
<> <br /> <hr />


        <center>
            <h3>Technical Skills</h3>
        </center>

        <div className="card">
            <Accordion activeIndex={null}>
                <AccordionTab header="Programming Languages">
                    <Panel>
                        <img src={ps} className="skill-image" alt="Programming Languages" />
                        <p>C C++ JAVA PHP PYTHON JAVASCRIPT</p>
                    </Panel>
                </AccordionTab>

                <AccordionTab header="Desktop App Development">
                    <Panel>
                        <img src={tks} className="skill-image" alt="Desktop App Development" />
                        <p>Tkinter Custom Tkinter</p>
                    </Panel>
                </AccordionTab>

                <AccordionTab header="Web Technologies">
                    <Panel>
                        <img src={ws} className="skill-image" alt="Web Technologies" />
                        <p>HTML CSS JavaScript</p>
                    </Panel>
                </AccordionTab>

                <AccordionTab header="Frontend">
                    <Panel>
                        <img src={frs} className="skill-image" alt="Frontend Technologies" />
                        <p>React Bootstrap Tailwind</p>
                    </Panel>
                </AccordionTab>

                <AccordionTab header="Backend">
                    <Panel>
                        <img src={phps} className="skill-image" alt="Backend Technologies" />
                        <p>PHP</p>
                    </Panel>
                </AccordionTab>
            </Accordion>

            <hr />
        </div>

        <center>
            <h3>Additional Skills</h3>
        </center>

        <div>
            <Accordion activeIndex={null}>
                <AccordionTab header="Game Development">
                    <p className="m-0">Game Development Using Unity Game Engine</p>
                </AccordionTab>

                <AccordionTab header="Video-Editing">
                    <p className="m-0">Video-Editing Using Sony Vegas Pro</p>
                </AccordionTab>

                <AccordionTab header="Version Control">
                    <p className="m-0">Version Control Using Git, GitHub</p>
                </AccordionTab>

                <AccordionTab header="Audio-Dubbing">
                    <p className="m-0">Audio-Dubbing Using Audacity</p>
                </AccordionTab>

                <AccordionTab header="3D-Modelling">
                    <p className="m-0">3D-Modelling Using Blender</p>
                </AccordionTab>

                <AccordionTab header="UI/UX Design">
                    <p className="m-0">UI/UX Design Using Figma</p>
                </AccordionTab>

                <AccordionTab header="MS office">
                    <p className="m-0">Microsoft Excel, PowerPoint Presentation, Microsoft Word</p>
                </AccordionTab>
            </Accordion>
        </div>
    </>
);


}
