import "./style/navbar.scss"
import { BsList } from "react-icons/bs";

export default function Navbar() {
    return (
        <>
            <nav className="navbar" id="sideNav">
                <div className="deneme">
                    <a className="navbar-brand" href="#page-top">
                        <span className="d-block">Clarence Taylor</span>
                        <span className="d-none">
                            <img className="img-profile" src="/src/assets/profile.jpg" />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <BsList className="icon" />
                    </button>
                </div>
                <div className="navbar-collapse collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link js-scroll-trigger active" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}