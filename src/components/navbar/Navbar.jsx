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
                <a href=""><img src="/linkedin.png" alt="linkedin" /></a>
                <a href=""><img src="/github.png" alt="github" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar