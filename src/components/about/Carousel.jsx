import { useState, useEffect } from "react";
import FutureData from "../../data/FutureData";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === FutureData.length - 1 ? 0 : prev + 1,
      );
    }, 3000);
    return () => clearInterval(slide);
  }, []);

  return (
    <>
      <div>
        <img
          src={FutureData[currentSlide].image}
          alt={FutureData[currentSlide].title}
        />
        <h2>{FutureData[currentSlide].title}</h2>
        <p>{FutureData[currentSlide].description}</p>
      </div>


{/* -------------------------------------------------------------- */}


      <h2 style={{ textAlign: "center" }}>Carousel Slides</h2>
      <div className="containerDiv">
        <div
          className="carouselDiv"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {FutureData.map((item, index) => (
            <div key={index} className="carouselSlide">
              <img src={item.image} alt="" width={200} height={100} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
