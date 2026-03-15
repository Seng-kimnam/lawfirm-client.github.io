import React, { useEffect, useState } from "react";
import { request } from "../../constants/api";
import PdfViewer from "../PdfViewer";
import { useSearchParams } from "react-router";

const DocumentCard = () => {
  const [filePdf, setFilePdf] = useState([]);
  const [searchParams] = useSearchParams();

  const fetchPdfFile = async () => {
    const categoryName = searchParams.get("categoryName");
    const keyword = searchParams.get("search");

    try {
      let response;

      //for  Search + Filter
      if (keyword && categoryName && categoryName !== "ALL") {
        response = await request(
          `/documents/search-document?keyword=${keyword}&categoryName=${categoryName}`,
          "GET"
        );
      }

      // for Search only
      else if (keyword) {
        response = await request(
          `/documents/search-document?keyword=${keyword}`,
          "GET"
        );
      }

      //for  Filter only
      else if (categoryName && categoryName !== "ALL") {
        response = await request(
          `/documents/filter-by-category?categoryName=${categoryName}`,
          "GET"
        );
      }

      // fetch all
      else {
        response = await request("/documents/without-pagination", "GET");
      }

      setFilePdf(response?.payload || []);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  useEffect(() => {
    fetchPdfFile();
  }, [searchParams]);

  return (
    <div className="grid cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filePdf?.map(({ docId, fileCover, fileUrl, title }) => (
        <div
          key={docId}
          className="rounded-lg border-2 border-gray-500 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          <PdfViewer
            docId={docId}
            fileCover={fileCover}
            fileUrl={fileUrl}
            title={title}
          />

          <h3 className="text-center font-battambang pt-4 underline font-extrabold mb-2">
            Title : <span className="font-semibold">{title}</span>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default DocumentCard;
