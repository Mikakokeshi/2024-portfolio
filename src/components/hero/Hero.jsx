import { motion } from 'framer-motion'
import './hero.scss'

const textVariants = {
    initial : {
        x: -500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity:1,
        transition :{
            duration: 1.3,
            staggerChildren: 0.1
        },
    },
    scrollButton: {
        opacity:0,
        y: 10,
        transition: {
            duration: 1,
            repeat: Infinity,
        }

    }
}


const sliderVariants = {
    initial : {
        x: 0,
    },
    animate: {
        x:"-220px",
        opacity:1,
        transition :{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror"
        },
    },
}


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div variants={textVariants} initial='initial' animate='animate' className="textContainer">
                <motion.h2 variants={textVariants} >Mikako Iijima</motion.h2>
                <motion.h1 variants={textVariants} >Frontend Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                <a href="#Portfolio">
                    <motion.button variants={textVariants}>See the Latest Works </motion.button>
                </a>
                <a href="#Contact">
                    <motion.button variants={textVariants}> Contact </motion.button>
                </a>
                </motion.div>
                <a href="#Portfolio" className='scrollButton'>
                    <motion.img variants={textVariants} animate='scrollButton' src="/scroll.svg" alt="" />
                </a>
            </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial='initial' animate='animate' className="slidingTextContainer">
            Welcome 
        </motion.div>
        {/* <div className="imageContainer">
            <img src="./hero.png" alt="" />
        </div> */}
    </div>
)
}

export default Hero