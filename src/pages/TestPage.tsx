import React from "react";
import AutoResizeComponent from "../components/AutoResizeComponent";
import ScrollToTop from "../components/ScrollToTop";
import FixedHeader from "../components/FixedHeader";
import ResponsiveText from "../components/ResponsiveText";
import DetectVisibility from "../components/DetectVisibility";

const TestPage = () => {
  return (
    <div>
      <h1>Test Page for useLayoutEffect Components</h1>

      <section>
        <h2>Auto Resize Component</h2>
        <AutoResizeComponent />
      </section>

      <section>
        <h2>Smooth Scroll to Top</h2>
        <ScrollToTop />
      </section>

      <section>
        <h2>Fixed Header Example</h2>
        <FixedHeader />
      </section>

      <section>
        <h2>Responsive Text Size</h2>
        <ResponsiveText />
      </section>

      <section>
        <h2>Element Visibility Detection</h2>
        <DetectVisibility />
      </section>
    </div>
  );
};

export default TestPage;
