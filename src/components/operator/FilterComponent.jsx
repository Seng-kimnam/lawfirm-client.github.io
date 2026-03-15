import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { request } from "../../constants/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);

  const handleSelect = (categoryName) => {
    const search = searchParams.get("search");

    const params = {};
    if (search) params.search = search;
    if (categoryName) params.categoryName = categoryName;

    setSearchParams(params);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await request("/categories/without-pagination", "GET");

        setCategories(response?.payload || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchCategory();
  }, []);

  return (
    <div className="mt-5">
      <Select onValueChange={handleSelect}>
        <SelectTrigger className="w-full border-2 border-gray-600">
          <SelectValue placeholder="Category of Document" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="border border-black rounded-lg p-2">
            <SelectLabel>Category Name</SelectLabel>
            <SelectItem key={0} value={"ALL"}>
              All
            </SelectItem>
            {categories?.map(({ categoryId, categoryName }) => (
              <SelectItem key={categoryId} value={categoryName}>
                {categoryName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterComponent;
