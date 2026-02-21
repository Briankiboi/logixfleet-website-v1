import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookDemo from './pages/BookDemo';
import DeliverySolution from './pages/DeliverySolution';
import FleetSolution from './pages/FleetSolution';
import Integration from './pages/Integration';
import PitchDeck from './pages/PitchDeck';
import UseCases from './pages/UseCases';
import './styles/global.css';

// Scroll to section or top on route/hash change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = (hash) => {
      const element = document.querySelector(hash);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight - 20,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    if (location.hash) {
      // Small delay to ensure DOM is ready after navigation
      setTimeout(() => {
        scrollToElement(location.hash);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Handle hash link clicks on the same page
  useEffect(() => {
    const handleHashClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const to = target.getAttribute('to') || href;

      if (to && to.includes('#')) {
        const hash = to.includes('#') ? '#' + to.split('#')[1] : null;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            e.preventDefault();
            const navHeight = 72;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - navHeight - 20,
              behavior: 'smooth'
            });
            // Update URL without triggering navigation
            window.history.pushState(null, '', to);
          }
        }
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/delivery-solution" element={<DeliverySolution />} />
        <Route path="/fleet-solution" element={<FleetSolution />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/pitch-deck" element={<PitchDeck />} />
        <Route path="/use-cases/rj-logistics" element={<UseCases />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
