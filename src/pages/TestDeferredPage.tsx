import React from "react";
import DeferredSearch from "../components/DeferredSearch";
import DeferredList from "../components/DeferredList";
import DeferredAnimation from "../components/DeferredAnimation";

const TestDeferredPage = () => {
  return (
    <div>
      <h1>Test Page for useDeferredValue Components</h1>

      <section>
        <h2>Deferred Search Component</h2>
        <DeferredSearch />
      </section>

      <section>
        <h2>Deferred List Component</h2>
        <DeferredList />
      </section>

      <section>
        <h2>Deferred Animation Component</h2>
        <DeferredAnimation />
      </section>
    </div>
  );
};

export default TestDeferredPage;
