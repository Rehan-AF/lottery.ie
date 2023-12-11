import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Navbar from '../components/navbar';
import Banner from '../components/navbar/banner';
import { Footer } from '../components/footer';
import ResultsPage from '../pages/resultsPage';
import MobileNav from '../components/navbar/MobileNav';
import ResultsHistoryPage from '../pages/resultsHistory';
import {
  LayoutWithNavbar,
  LayoutWithouNavbar,
} from '../components/template/Layout.jsx';
import SignIn from '../components/signIn/signIn.jsx';
import SignUp from '../components/SignUp/index.jsx';
const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWithNavbar />}>
            <Route path="" element={<Home />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="resultshistory" element={<ResultsHistoryPage />} />
          </Route>
          <Route path="/auth" element={<LayoutWithouNavbar />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
