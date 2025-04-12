import React from "react";
import "./ImageCarouselv2.css";
function ImageCarouselv2({ images, width, height }) {
  const [selectedImage, setSelectedImage] = React.useState(0);
  console.log(images, width, height);
  return (
    <div className="container">
      <div className="carousel">
        {images.map((img, imgIdx) => (
          <img
            style={{
              transform: `translateX(${600 * -selectedImage}px)`,
              // transform: `translateX(${600 * (imgIdx - selectedImage)}px)`,
            }}
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            key={imgIdx}
          />
        ))}
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

export default ImageCarouselv2;
