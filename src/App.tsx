import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForDoctors from './components/ForDoctors';
import ForPatients from './components/ForPatients';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ForDoctors />
      <ForPatients />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;