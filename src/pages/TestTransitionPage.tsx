import React from "react";
import SearchWithTransition from "../components/SearchWithTransition";
import SlowLoadingContent from "../components/SlowLoadingContent";
import SortableListWithTransition from "../components/SortableListWithTransition";

const TestTransitionPage = () => {
  return (
    <div>
      <h1>Test Page for useTransition Components</h1>

      <section>
        <h2>Search with Transition</h2>
        <SearchWithTransition />
      </section>

      <section>
        <h2>Slow Loading Content</h2>
        <SlowLoadingContent />
      </section>

      <section>
        <h2>Sortable List with Transition</h2>
        <SortableListWithTransition />
      </section>
    </div>
  );
};

export default TestTransitionPage;
