import { useState } from "react";

const ReadMoreComponent = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If text is already short, no toggle needed
  if (!text || text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const displayText = isExpanded ? text : text.slice(0, maxLength) + "...";

  return (
    <p className="indent-10 drop-cap  text-lg ">
      {displayText}{" "}
      <span
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ color: "#2563eb", cursor: "pointer", fontWeight: 500 }}
      >
        {isExpanded ? "See less" : "See more"}
      </span>
    </p>
  );
};

export default ReadMoreComponent;
