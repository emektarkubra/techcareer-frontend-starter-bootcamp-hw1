import "./style/pageLayout.scss";

import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

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
    </div>
  );
}
