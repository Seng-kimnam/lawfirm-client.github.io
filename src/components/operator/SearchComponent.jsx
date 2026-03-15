import React, { useRef } from "react";
import { useSearchParams } from "react-router";

const SearchComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchRef = useRef(null);

  const handleSearchChange = () => {
    const value = searchRef.current.value;
    const categoryName = searchParams.get("categoryName");

    const params = {};
    if (value) params.search = value;
    if (categoryName) params.categoryName = categoryName;

    setSearchParams(params);
  };

  return (
    <input
      ref={searchRef}
      className="w-full rounded-lg border-2 border-gray-600 px-3 py-2"
      placeholder="Search document..."
      defaultValue={searchParams.get("search") || ""}
      onChange={handleSearchChange}
    />
  );
};

export default SearchComponent;
