import  './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
// import Parallax from './components/parallax/Parallax';

const App = () => {
  return (
    <div>
    <section id="Homepage"> 
      <Navbar />
      <Hero />
    </section>
    {/* <section id="Services"><Parallax type="services"/></section>
    <Parallax type="portfolio"/>*/}
    <section id="Portfolio">
    <Portfolio />
    </section>
    <section id="Contact">Contact</section>
    <section id="About">About</section>
    </div>
  );
};

export default App;
