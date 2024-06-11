import { useRef } from 'react';
import  './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
const items = [
  {
    id: 1,
    title: "React Music Search App",
    url: "https://music-app-gamma-liard.vercel.app/",
    img: "./music-app.png",
    desc: "#Features: Search function, pagination, Play a song"
  },
  {
    id: 2,
    title: "React SNS APP",
    url: "https://sns-app-mu.vercel.app/",
    img: "./sns-app.png",
    desc: "#Features: Login, Sign up, create and delete a post"
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
  const {scrollYProgress} = useScroll({target: ref,
    // offset:["end end", "start end"]
  });
  const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return (
        <section >
        <div className="container">
          <div className="wrapper">
            <div className="imgContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <a  className="button"href={item.url} target= "blank">Visit</a>
              </motion.div>
          </div>
        </div>
      </section>
  )
}

const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref, 
      offset:["end end", "start start"]
  });
  const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30})
  console.log(scrollYProgress, scaleX)
  
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
}

export default Portfolio