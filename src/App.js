import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './pages/main';
import About from './pages/about';
import Delivery from './pages/delivery';
import Contacts from './pages/contacts';
import Payment from './pages/payment';
import BasketPage from './pages/basket';
import PDPPage from './pages/pdp';

import './App.css';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/delivery" element={<Delivery />}/>
                    <Route path="/payment" element={<Payment />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                    <Route path="/basket" element={<BasketPage />}/>
                    <Route path="/product" element={<PDPPage />}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
