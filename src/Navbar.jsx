
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from "react-router-dom";

export default function Navbar() {


    let navigate = useNavigate();
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home',command:()=>navigate("/")},
        {label: 'Contact', icon: 'pi pi-phone',command:()=>navigate("/contact")},
        {label: 'Skills', icon: 'pi pi-wrench',command:()=>navigate("/skills")},
        {label: 'Certifications', icon: 'pi pi-id-card',command:()=>navigate("/certifications")},
        {label: 'Projects', icon: 'pi pi-server',command:()=>navigate("/projects")},
        {label: 'Work Experience', icon: 'pi pi-briefcase',command:()=>navigate("/experience")},
        {label: 'About', icon: 'pi pi-user' ,command:()=>navigate("/about")}
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
        