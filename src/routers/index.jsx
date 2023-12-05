import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../components/navbar';
import Banner from '../components/navbar/banner';
import { Footer } from '../components/footer';
import ResultsPage from '../pages/resultsPage';
import ResultsCard from '../components/resultsComponent/resultsCard';
import MobileNav from '../components/navbar/MobileNav';
import Template from '../components/template';
import CustomArrows from '../components/navbar/games/GameCarousel';

const Routers = () => {
  return (
    <div>
      <Router>
        <div className="sm:block lg:hidden px-[1rem] py-[2px]">
          <MobileNav />
        </div>
        <div className="sm:hidden lg:block">
          <Navbar />
        </div>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/caroucel" element={<CustomArrows />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
