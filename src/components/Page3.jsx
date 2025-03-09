import React, { useState } from "react";


const Page3 = () => {
  const [images] = useState([
    {
      id: 1,
      image:
        "https://gh22.codebydennis.com/media/pages/work/easports-fgs22/5ad0b217eb-1728463388/fnatic-crops-1080x-q72.jpg",
      title: "KNVB",
      des: "A BRAND NEW LOOK FOR TOTO KNVB BEKER",
    },
    {
      id: 2,
      image:
        "https://gh22.codebydennis.com/media/pages/work/future-goals/e2ab33fde1-1728463383/logo-board-2-1080x-q72.jpg",
      title: "EA SPORTS",
      des: "ARTWORK FOR FIFA GLOBAL SERIES 22",
    },
    {
      id: 3,
      image:
        "https://gh22.codebydennis.com/media/pages/work/knvb-25-years-of-just-doing-it/4f5faaddb9-1728463379/thumb-2-1080x-q72.jpg",
      title: "AFC AJAX",
      des: "CARIBBEAN INSPIRED DESIGN FOR FUTURE GOALS",
    },
    {
      id: 4,
      image:
        "https://gh22.codebydennis.com/media/pages/work/future-goals/e2ab33fde1-1728463383/logo-board-2-1080x-q72.jpg",
      title: "Future Goals",
      des: "A BRAND NEW LOOK FOR TOTO KNVB BEKER",
    },
  ]);

  // ✅ Define Mouse Hover Effects Using Tailwind CSS
  const handleMouseEnter = (event) => {
    event.currentTarget.querySelector(".imgpage3").classList.add("rounded-full", "scale-105");
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.querySelector(".imgpage3").classList.remove("rounded-full", "scale-105");
  };

  return (
    <div className="w-full lg:w-[90%] min-h-screen flex flex-col lg:flex-row lg:flex-wrap items-center relative z-10 justify-between gap-[20vw] lg:gap-[5vw] p-8">
      {images.map((item, index) => (
        <div
          key={index}
          className="w-full lg:w-[45%] lg:h-[70vh] rounded-2xl cursor-pointer overflow-hidden relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover imgpage3 transition-all duration-500 ease-in-out"
          />
          <div className="p-4 z-10 absolute bottom-5 left-5 text-white bg-black bg-opacity-50 rounded-lg px-3 py-2">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm">{item.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page3;
