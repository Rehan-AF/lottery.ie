import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import Navbar from '../navbar';
import MobileNav from '../navbar/MobileNav';
import Banner from '../navbar/banner';
import SignNavbar from '../signIn/SignNavbar';
import SignFooter from '../signIn/SignFooter';

export const LayoutWithNavbar = () => {
  return (
    <div>
      <div className="sm:block lg:hidden px-[1rem] py-[2px]">
        <MobileNav />
      </div>
      <div className="sm:hidden lg:block">
        <Navbar />
      </div>

      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};
export const LayoutWithouNavbar = () => {
  return (
    <div>
      <SignNavbar />
      <Outlet />
      <SignFooter />
    </div>
  );
};
