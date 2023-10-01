import "./style/skills.scss";
import { BsCheckLg } from "react-icons/bs";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoAngular, BiLogoReact, BiLogoLess, BiLogoWordpress } from "react-icons/bi";
import { DiNodejsSmall, DiGulp, DiGrunt, DiNpm,DiSass } from "react-icons/di";

export default function Skills(){
    return (
        <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><BiLogoHtml5 /></li>
                        <li class="list-inline-item"><BiLogoCss3 /></li>
                        <li class="list-inline-item"><BiLogoJavascript /></li>
                        <li class="list-inline-item"><BiLogoAngular /></li>
                        <li class="list-inline-item"><BiLogoReact /></li>
                        <li class="list-inline-item"><DiNodejsSmall /></li>
                        <li class="list-inline-item"><DiSass /></li>
                        <li class="list-inline-item"><BiLogoLess /></li>
                        <li class="list-inline-item"><BiLogoWordpress /></li>
                        <li class="list-inline-item"><DiGulp /></li>
                        <li class="list-inline-item"><DiGrunt /></li>
                        <li class="list-inline-item"><DiNpm /></li>
                    </ul>
                    <div class="subheading mb-3 ">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li className="list-item">
                            <span class="fa-li"><BsCheckLg /></span>
                            Mobile-First, Responsive Design
                        </li >
                        <li className="list-item">
                            <span class="fa-li"><BsCheckLg /></span>
                            Cross Browser Testing &amp; Debugging
                        </li>
                        <li className="list-item">
                            <span class="fa-li"><BsCheckLg /></span>
                            Cross Functional Teams
                        </li >
                        <li className="list-item">
                            <span class="fa-li"><BsCheckLg /></span>
                            Agile Development &amp; Scrum
                        </li>
                    </ul>
                </div>
            </section>
    )
}