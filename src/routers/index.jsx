import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../components/navbar';
import Banner from '../components/navbar/banner';
import { Footer } from '../components/footer';
import ResultsPage from '../pages/resultsPage';
import MobileNav from '../components/navbar/MobileNav';
import ResultsHistoryPage from '../pages/resultsHistory';
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
          <Route path="/resultshistory" element={<ResultsHistoryPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
