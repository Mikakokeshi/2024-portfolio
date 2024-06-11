import {motion} from 'framer-motion'


const variants = {
  open: {
    transition: {
      staggerChildren : 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren : 0.1,
    }
  }  
}
const itemVariants = {
  open: {
    y: 20,
    opacity:1,
  },
  closed: {
    y: 50,
    opacity:0,
  }  
}


const Links = () => {
  const items = [
    "Top", 
    // "Services",
    "Portfolio", 
    "Contact",
    "About" 
  ]

  return (
    <motion.div className="links" variants={variants}>
      {items.map(item=> (
        <motion.a variants={itemVariants} whileHover={{ scale: 1.1}} whileTap = {{scale: 0.95}} href={`#${item}`} key={item}>{item}</motion.a>
      ))
    }</motion.div>
  )
}

export default Links