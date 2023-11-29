import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../components/navbar';
import Banner from '../components/navbar/banner';
import { Footer } from '../components/footer';
import ResultsPage from '../pages/resultsPage';

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Routers;
