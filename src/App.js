import './App.css';
import BackToTop from './common/BackToTop';
import PreLoader from './common/PreLoader';
import BusinessResults from './components/BusinessResults';
import Footer from './components/Footer';
import FrequentlyAskQuestions from './components/FrequentlyAskQuestions';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <>
        <PreLoader/>
        <Hero />
        <BusinessResults />
        <Testimonials />
        <FrequentlyAskQuestions />
        <Footer />
      </>
      <BackToTop/>
    </>
  );
}

export default App;
