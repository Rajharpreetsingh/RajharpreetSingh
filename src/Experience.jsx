import ic from "./ic.jpg";
import "./Experience.css";

export default function Experience() {
return (
<> <center> <h3>Internship</h3>


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
        </center>
    </>
);


}
