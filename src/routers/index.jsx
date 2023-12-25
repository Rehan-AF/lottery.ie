import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import Home from '../pages/home';
import ResultsPage from '../pages/resultsPage';
import ResultsHistoryPage from '../pages/MegaDaViradaHistory/index.jsx';
import {
  LayoutWithNavbar,
  LayoutWithouNavbar,
} from '../components/template/Layout.jsx';
import SignIn from '../pages/SignIn/signIn.jsx';
import SignUp from '../pages/SignUp/index.jsx';
import ForgotPassword from '../pages/forgotPassowrd/ForgotPassword.jsx';
import LotofacilHistoryPage from '../pages/LotofacilHistory/index.jsx';
import QuinaHistoryPage from '../pages/QuinaHistory/index.jsx';
import MegaSanaHistoryPage from '../pages/MegaSenaHistory/index.jsx';
import LotoManiaHistoryPage from '../pages/LotoManiaHistory/index.jsx';
import DuplaSenaHistoryPage from '../pages/DuplaSenaHistory/index.jsx';
import MillionariaHistoryPage from '../pages/MillionariaHistory/index.jsx';
import SuperSeteHistoryPage from '../pages/SuperSeteHistory/index.jsx';
import BasketPage from '../pages/BasketPage/BasketPage.jsx';
import { Provider } from 'react-redux';
import { store } from '../Store/store.js';
import Selection1Page from '../pages/SelectionComponents/Selection1Page.jsx';
import ProfileLayout from '../components/template/ProfileLayout.jsx';
import ChangePassword from '../components/Profile/ChangePassword.jsx';

const NewRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Provider store={store}>
          <LayoutWithNavbar />
          <ScrollRestoration />
        </Provider>
      </div>
    ),
    children: [
      { path: '', element: <Home /> },
      { path: 'results', element: <ResultsPage /> },
      { path: 'results/megaSanaVirda', element: <ResultsHistoryPage /> },
      { path: 'results/lotofacil', element: <LotofacilHistoryPage /> },
      { path: 'results/quina', element: <QuinaHistoryPage /> },
      { path: 'results/mega-sana', element: <MegaSanaHistoryPage /> },
      { path: 'results/loto-mania', element: <LotoManiaHistoryPage /> },
      { path: 'results/dupla-sena', element: <DuplaSenaHistoryPage /> },
      { path: 'results/millionaria', element: <MillionariaHistoryPage /> },
      { path: 'results/super-sete', element: <SuperSeteHistoryPage /> },
      { path: 'draw-games/basket', element: <BasketPage /> },
      { path: 'draw-games/select', element: <Selection1Page /> },
      { path: 'draw-games/select1', element: <Selection1Page /> },
    ],
  },
  {
    path: '/auth',
    element: (
      <div>
        <Provider store={store}>
          <LayoutWithouNavbar />
          <ScrollRestoration />
        </Provider>
      </div>
    ),
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },
  {
    path: '/account',
    element: (
      <div>
        <Provider store={store}>
          <ProfileLayout />
          <ScrollRestoration />
        </Provider>
      </div>
    ),
    children: [
      { path: 'change-password', element: <ChangePassword /> },
      { path: 'my-details', element: <ChangePassword /> },
    ],
  },
]);

export default NewRouter;
