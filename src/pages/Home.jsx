import Navbar  from '../components/Navbar.jsx';
import Hero    from '../components/Hero.jsx';
import About   from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Journey  from '../components/Journey.jsx';
import Contact  from '../components/Contact.jsx';
import Footer   from '../components/Footer.jsx';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}