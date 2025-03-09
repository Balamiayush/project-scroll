import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useRef } from "react";

const Page3 = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

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

  return (
    <div
      ref={scrollRef}
      className="w-full lg:w-[90%] min-h-screen flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-16 p-8 relative z-20"
    >
      {images.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity:0
          }}
    
          whileInView={{
            opacity:1
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[45%] lg:h-[70vh] rounded-2xl cursor-pointer relative z-20 origin-bottom"
        >
          <motion.img
            src={item.image}
            alt=""
            className="w-full h-full object-cover imgpage3 "
          />
          <motion.div className="absolute bottom-5 left-5 text-white rounded-lg px-3 py-2 backdrop-blur-lg">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm">{item.des}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Page3;
