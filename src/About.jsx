
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import PageTransition from './PageTransition';
import "./Styles/About.css";
import {motion} from "motion/react";
import { Panel } from 'primereact/panel';

export default function TemplateDemo() {
    

    return (
   
        
        <PageTransition>


             <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
        
          
        
            
        </div>

         
         <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center",marginTop:"2rem"}}>
              <h3>About Me </h3>
        </div>
         
         <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:3}}
          >
         <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
             <motion.div 
         initial={{opacity:0,y:-30}}
         animate={{opacity:1,y:0}}
         transition={{duration:1}}
          >
          
              <img src="https://media.licdn.com/dms/image/v2/D5603AQF-87kZiQ_6cQ/profile-displayphoto-crop_800_800/B56aF8DrrSHQAI-/0/1793082703619?e=1794441600&v=beta&t=GTaOxCRWgBNDBqcpk4HM_iTwP1fr62oTRSE6PYgDGkc" style={{borderRadius:"8rem",width:"8",height:"10rem",border:"solid 3px black",marginTop:"2rem",boxShadow:"2pxblack"}} className="pim">
              </img>
              </motion.div>

         </div>
           
        <div className="card">
        
             
            <BlockUI >
                <Panel header="">
                    <p className="m-0">

                     Hi, I'm Raj, Iam a BCA Graduate And Currently Pursuing MCA student at Amity University, Noida, with a passion
  for software development and building web applications. I work with
  technologies like React.js, Node.js, Java, JavaScript, HTML, CSS, PHP,
  and MySQL. I enjoy turning ideas into functional applications, exploring
  new technologies, and solving real-world problems through code. I'm
  continuously improving my full-stack development skills and looking
  forward to building impactful projects and growing as a FullStack Developer.

                    </p>
                </Panel>
            </BlockUI>
        </div>
        </motion.div>
        </PageTransition>
    );
}
        