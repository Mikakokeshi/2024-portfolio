import { useRef } from 'react';
import  './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
const items = [
  {
    id: 1,
    title: "React",
    url: "https://music-app-gamma-liard.vercel.app/",
    img: "./music-app.png",
    desc: "Reactを使用してます"
  },
  {
    id: 2,
    title: "Vanilla JS",
    url: "https://music-app-gamma-liard.vercel.app/",
    img: "./music-app.png",
    desc: "Reactを使用してます"
  },
  {
    id: 3,
    title: "Next.js ",
    url: "https://music-app-gamma-liard.vercel.app/",
    img: "./music-app.png",
    desc: "Reactを使用してます"
  },
]

const Single =({item}) => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref});
  const y = useTransform(scrollYProgress, [0,1], [-300,300]);

  return <section ref={ref}>
    <div className="container">
      <div className="wrapper">
        <div className="imgContainer">
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer">
          <motion.h2>{item.title}</motion.h2>
          <p>{item.desc}</p>
          <a  className="button"href="">See Demo</a>
        </motion.div>
      </div>
    </div>
  </section>
}

const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref, offset:["end end", "start start"]});
  const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30})
  console.log(scrollYProgress, scaleX)
  
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX: scaleX}} className="progressBar"></motion.div>
      </div>
    <div>
      { items.map((item) => (
      <Single item={item} key={item.id} />
      ))}
    </div>
    </div>
  );
}

export default Portfolio