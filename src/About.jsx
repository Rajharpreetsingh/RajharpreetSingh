
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import PageTransition from './PageTransition';
import { Panel } from 'primereact/panel';

export default function TemplateDemo() {
    

    return (
        <PageTransition>
        <div className="card">
            <br></br>
             
            <BlockUI >
                <Panel header="About">
                    <p className="m-0">

                     Hi, I'm Raj, an MCA student at Amity University, Noida, with a passion
  for software development and building web applications. I work with
  technologies like React.js, Node.js, Java, JavaScript, HTML, CSS, PHP,
  and MySQL. I enjoy turning ideas into functional applications, exploring
  new technologies, and solving real-world problems through code. I'm
  continuously improving my full-stack development skills and looking
  forward to building impactful projects and growing as a software developer.

                    </p>
                </Panel>
            </BlockUI>
        </div>
        </PageTransition>
    );
}
        