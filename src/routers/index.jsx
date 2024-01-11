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
import MyDetails from '../components/Profile/MyDetails.jsx';
import LotofacilSelectionPage from '../pages/SelectionComponents/LotofacilSelectionPage.jsx';
import QuinaSelectionPage from '../pages/SelectionComponents/QuinaSelectionPage.jsx';
import MegaSanaSelectionPage from '../pages/SelectionComponents/MegaSenaSelection.jsx';
import MillionariaSelectionPage from '../pages/SelectionComponents/MillionariaSelectionPage.jsx';
import MyTickets from '../components/Profile/MyTickets.jsx';
import DuplaSenaSelectionPage from '../pages/SelectionComponents/duplaSenaSelectionPage.jsx';
import LotoManiaSelectionPage from '../pages/SelectionComponents/lotoManiaSelectionPage.jsx';
import DepositPage from '../components/Profile/Deposit/DepositPage.jsx';
import WithdrawPage from '../components/Profile/withdraw/WithdrawPage.jsx';
import Referrals from '../components/Profile/Referrals/Referrals.jsx';
import FinancialTransaction from '../components/Profile/FinancialTransaction.jsx';
import SuperSeteSelectionPage from '../pages/SelectionComponents/SuperSeteSelectionpage.jsx';
import SupportPage from '../components/Profile/support/SupportPage.jsx';
import HowToClaim from '../pages/howToClaim/index.jsx';
import FAQpage from '../pages/FAQ/FAQ.jsx';

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
      {
        path: 'draw-games/lotofacil-Selection',
        element: <LotofacilSelectionPage />,
      },
      {
        path: 'draw-games/quina-Selection',
        element: <QuinaSelectionPage />,
      },
      {
        path: 'draw-games/mega-sena-Selection',
        element: <MegaSanaSelectionPage />,
      },
      {
        path: 'draw-games/millionaria-Selection',
        element: <MillionariaSelectionPage />,
      },
      {
        path: 'draw-games/dupla-sena-Selection',
        element: <DuplaSenaSelectionPage />,
      },
      {
        path: 'draw-games/loto-mania-Selection',
        element: <LotoManiaSelectionPage />,
      },
      {
        path: 'draw-games/super-sete-Selection',
        element: <SuperSeteSelectionPage />,
      },
      {
        path: 'useful-info/how-to-claim',
        element: <HowToClaim />,
      },
      {
        path: 'useful-info/faq',
        element: <FAQpage />,
      },
    ],
  },
  {
    path: '/auth',
    element: (
      <div>
        <Provider store={store}>
          <LayoutWithNavbar />
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
      { path: '', element: <MyDetails /> },
      { path: 'my-details', element: <MyDetails /> },
      { path: 'change-password', element: <ChangePassword /> },
      { path: 'my-tickets', element: <MyTickets /> },
      { path: 'deposit', element: <DepositPage /> },
      { path: 'withdraw', element: <WithdrawPage /> },
      { path: 'referrals', element: <Referrals /> },
      { path: 'transactions', element: <FinancialTransaction /> },
      { path: 'support', element: <SupportPage /> },
    ],
  },
]);

export default NewRouter;
