import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AboutPage from './pages/AboutPage';
import AffiliatePage from './pages/AffiliatePage';
import CommunityPage from './pages/CommunityPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import SignupPage from './pages/SignupPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="affiliate" element={<AffiliatePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
