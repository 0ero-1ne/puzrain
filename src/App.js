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
import PLPPage from './pages/plp';

import './App.css';
import URLS from './URLS';

function App() {

    if (URLS.indexOf(window.location.pathname) === -1)
        return window.location.pathname = "/";

    return (
        <>
            <Header />
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/delivery" element={<Delivery />}/>
                        <Route path="/payment" element={<Payment />}/>
                        <Route path="/contacts" element={<Contacts />}/>
                        <Route path="/basket" element={<BasketPage />}/>
                        <Route path="/product" element={<PDPPage />}/>
                        <Route path="/catalog" element={<PLPPage />}/>
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer />
        </>
    );
}

export default App;
