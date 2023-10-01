import "./style/pageLayout.scss";

import About from "./About";
import Experience from "./Experience";

export default function PageLayout() {
  return (
    <div class="container-fluid p-0">
      <About />
      <hr />
      <Experience />
      <hr />
    </div>
  );
}
