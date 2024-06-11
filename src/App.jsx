import  './app.scss'
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
// import Parallax from './components/parallax/Parallax';

const App = () => {
  return (
    <div>
      <section id="Top"> 
        <Navbar />
        <Hero />
      </section>

      <div id="Portfolio">
        <Portfolio />
      </div>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
