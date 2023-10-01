import "./style/skills.scss";
import { BsCheckLg } from "react-icons/bs";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoAngular, BiLogoReact, BiLogoLess, BiLogoWordpress } from "react-icons/bi";
import { DiNodejsSmall, DiGulp, DiGrunt, DiNpm,DiSass } from "react-icons/di";

export default function Skills(){
    return (
        <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><BiLogoHtml5 /></li>
                        <li className="list-inline-item"><BiLogoCss3 /></li>
                        <li className="list-inline-item"><BiLogoJavascript /></li>
                        <li className="list-inline-item"><BiLogoAngular /></li>
                        <li className="list-inline-item"><BiLogoReact /></li>
                        <li className="list-inline-item"><DiNodejsSmall /></li>
                        <li className="list-inline-item"><DiSass /></li>
                        <li className="list-inline-item"><BiLogoLess /></li>
                        <li className="list-inline-item"><BiLogoWordpress /></li>
                        <li className="list-inline-item"><DiGulp /></li>
                        <li className="list-inline-item"><DiGrunt /></li>
                        <li className="list-inline-item"><DiNpm /></li>
                    </ul>
                    <div className="subheading mb-3 ">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li className="list-item">
                            <span className="fa-li"><BsCheckLg /></span>
                            Mobile-First, Responsive Design
                        </li >
                        <li className="list-item">
                            <span className="fa-li"><BsCheckLg /></span>
                            Cross Browser Testing &amp; Debugging
                        </li>
                        <li className="list-item">
                            <span className="fa-li"><BsCheckLg /></span>
                            Cross Functional Teams
                        </li >
                        <li className="list-item">
                            <span className="fa-li"><BsCheckLg /></span>
                            Agile Development &amp; Scrum
                        </li>
                    </ul>
                </div>
            </section>
    )
}