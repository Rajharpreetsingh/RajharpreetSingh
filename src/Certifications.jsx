import React from 'react';
import { Panel } from 'primereact/panel';
import c1Image from './c1.png';
import c2aImage from './c2-a.png';
import c2bImage from './c2-b.png';
import c3Image from './c3.png';
import c4Image from './c4.png';
import c6Image from './c6.jpg';
import './Certifications.css';

export default function Certifications() {
const certificates = [
{ id: 1, image: c1Image, title: 'Certificate 1', link: 'https://coursera.org/share/804e26db5bb59f8dcadc1207e3155d03' },
{ id: 2, image: c2aImage, title: 'Certificate 2', link: 'https://www.coursera.org/account/accomplishments/certificate/NLG5DFDRKG89' },
{ id: 3, image: c2bImage, title: 'Certificate 3', link: 'https://coursera.org/share/50e754343131de2f3cdc366bf85c2ac9' },
{ id: 4, image: c3Image, title: 'Certificate 4', link: 'https://verify.onwingspan.com/' },
{ id: 5, image: c4Image, title: 'Certificate 5', link: 'https://verify.onwingspan.com/' },
{ id: 6, image: c6Image, title: 'Certificate 6', link: 'https://verify.onwingspan.com/' }
];


return (
    <div className="certifications-container">
        <h2 className="certifications-heading">Certifications</h2>

        <div className="certifications-grid">
            {certificates.map((certificate) => (
                <Panel key={certificate.id} className="certificate-panel">
                    <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link"
                    >
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="certificate-image"
                        />
                    </a>
                </Panel>
            ))}
        </div>
    </div>
);


}
