import React from "react";
import DocumentCard from "../DocumentCard";
import SearchComponent from "../../operator/SearchComponent";
import FilterComponent from "../../operator/FilterComponent";

const DocumentComponent = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <DocumentCard />
        </div>
        <aside className="space-y-5">
          <SearchComponent />
          <FilterComponent />
        </aside>
      </div>
    </section>
  );
};

export default DocumentComponent;
