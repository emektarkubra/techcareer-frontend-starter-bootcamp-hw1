import "./style/pageLayout.scss";

import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";

export default function PageLayout() {
  return (
    <div class="container-fluid p-0">
      <About />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <Skills />
      <hr />
      <Interests />
      <hr />
    </div>
  );
}
