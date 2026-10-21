import ic from "./ic.jpg";
import "./Experience.css";
import { BlockUI } from 'primereact/blockui';
import PageTransition from './PageTransition';
import { Panel } from 'primereact/panel';

export default function Experience() {
return (
    
  <PageTransition>
 
<center> <h3>Internship</h3>


            <span>
                Worked as a Frontend Developer Intern at Bron24 Company
                <br />
                Duration: 3 Months
            </span>
        </center>

        <br />

        <center>
            <a href={ic} target="_blank" rel="noopener noreferrer">
                <img
                    src={ic}
                    alt="Bron24 Frontend Developer Internship Certificate"
                    className="internship-certificate"
                />
            </a>
             <div className="card">
                        <br></br>
                         
                        <BlockUI >
                            <Panel header="About">
                                <p className="m-0">
                                   I am Raj Harpreet Singh, a passionate software and game developer currently pursuing a Master of Computer Applications (MCA) with a focus on modern technologies and immersive experiences. I have a strong foundation in C/C++ and Python, along with practical experience in frontend development using HTML, CSS, and JavaScript. I enjoy building both CLI and GUI-based applications, as well as developing 2D and 3D games using tools like Unity. My work reflects my curiosity for problem-solving and my interest in creating interactive and engaging user experiences. I have also explored multiplayer systems using cloud-based solutions and continue to expand my skills in game mechanics and performance optimization. Beyond development, I have experience as a video editor intern, which has helped me develop a creative perspective and storytelling ability—skills that I often bring into my technical projects. I am highly motivated to grow as an AI/ML engineer and continuously strive to improve my skills through hands-on projects and consistent learning. I believe in mastering fundamentals first and using that mastery to create meaningful and innovative solutions.
                                </p>
                            </Panel>
                        </BlockUI>
                    </div>
        </center>
       
          </PageTransition>
    
  
);


}
