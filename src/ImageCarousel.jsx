import React from "react";
import "./ImageCarousel.css";
function ImageCarousel({ images, width, height }) {
  const [selectedImage, setSelectedImage] = React.useState(0);
  console.log(images, width, height);
  return (
    <div className="container">
      <div className="carousel">
        {/* {images.map((img, idx) => (
        <img key={idx} src={img.src} alt={img.alt} />
      ))} */}
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          // width={600}
          // height={400}
        />
        <button
          onClick={() =>
            setSelectedImage((i) => (i + images.length - 1) % images.length)
          }
          className="left-btn"
        >
          {"<"}
        </button>
        <button
          onClick={() =>
            setSelectedImage((i) => (i + images.length + 1) % images.length)
          }
          className="right-btn"
        >
          {">"}
        </button>
        <div className="span-box">
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={
                idx == selectedImage ? "selected marker" : "unselected marker"
              }
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
