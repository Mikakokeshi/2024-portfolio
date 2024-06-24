import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Music App",
    url: "https://music-app-gamma-liard.vercel.app/",
    img: "./music-app.png",
    feature: "Search function/Pagination/Play a song",
    buildWith: "React/Spotify API/Tailwind CSS",
  },
  {
    id: 2,
    title: "React / Supabase SNS APP",
    url: "https://sns-app-mu.vercel.app/",
    img: "./sns-app.png",
    feature:
      "Key Feature: User authentication/CRUD/search/Like feature/Personal post archive",
    buildWith: "Build with: React/Supabase/tailwindcss",
  },
  {
    id: 3,
    title: "React Portdolio",
    url: "https://2024-portfolio-smoky.vercel.app/",
    img: "./portfolio-app.png",
    feature: "Smooth animations",
    buildWith: "Build with: React/Framer Mortion/scss",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["end end", "start end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.feature}</p>
            <p>{item.buildWith}</p>
            <a className="button" href={item.url} target="blank">
              Visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  console.log(scrollYProgress, scaleX);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
