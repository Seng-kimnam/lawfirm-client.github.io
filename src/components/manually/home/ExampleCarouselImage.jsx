// /src/components/ExampleCarouselImage.jsx
import Image from "react-bootstrap/Image";

function ExampleCarouselImage({ text }) {
  return (
    <div style={{ height: "200px", width: "200px", backgroundColor: "#777" }}>
      <h2 className="pt-5 text-center text-white">{text}</h2>
    </div>
  );
}

export default ExampleCarouselImage;
