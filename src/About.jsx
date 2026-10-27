
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


Hey, I'm Raj!

I'm an MCA student at Amity University, Noida, passionate about software development and building web applications that solve real-world problems.

I work with technologies such as React.js, JavaScript, Node.js, Java, HTML, CSS, PHP, and MySQL. I enjoy creating interactive user interfaces, exploring backend development, and understanding how frontend applications communicate with servers and databases.

I believe the best way to learn is by building projects, experimenting with ideas, and solving problems independently. Every project helps me strengthen my technical skills and develop a deeper understanding of software engineering.

### What I'm Focused On

* **Frontend Development:** Building responsive and interactive interfaces using React.js, JavaScript, HTML, and CSS.
* **Backend Development:** Exploring server-side development with Node.js and working with databases.
* **Programming:** Strengthening my Java fundamentals and problem-solving abilities.

### My Goal

I'm working towards becoming a well-rounded full-stack developer who can build applications from the user interface to the backend and database.

I'm always eager to learn new technologies, collaborate with other developers, and work on projects that challenge me to grow.

Feel free to explore my projects and get in touch!


                    </p>
                </Panel>
            </BlockUI>
        </div>
        </PageTransition>
    );
}
        