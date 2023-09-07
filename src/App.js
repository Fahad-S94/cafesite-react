import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='menu' element={<MenuPage />} />
        <Route path='contact' element={<ContactPage />} />
        {/* <Route path='directory' element={<CampsitesDirectoryPage />} /> */}
        {/* <Route
            path='directory/:campsiteId'
            element={<CampsiteDetailPage />}
        /> */}
        <Route path='about' element={<AboutPage />} />
        <Route path='cart' element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
