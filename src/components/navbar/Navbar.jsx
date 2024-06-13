import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
            <Sidebar />
        <div className="wrapper">
            {/* <motion.span initial={{opacity:0 , scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}> Mikakokeshi</motion.span> */}
            <div className="social">
                <a href="https://github.com/Mikakokeshi" target="blank"><img src="/github.png" alt="github" /></a>
                <a href="https://www.linkedin.com/in/mikako-iijima/" target="blank"><img src="/linkedin.png" alt="linkedin" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar