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
import Reviews from './pages/reviews';
import FavPage from './pages/fav';
import Login from './pages/login';
import Register from './pages/register';
import ErrorPage from './pages/error';
import Addresses from './pages/addresses';

import './App.css';
import URLS from './URLS';

function App() {
    if (URLS.indexOf(window.location.pathname) === -1)
        return window.location.pathname = "/error";

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
                        <Route path="/reviews" element={<Reviews />}/>
                        <Route path="/favourite" element={<FavPage />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/error" element={<ErrorPage />}/>
                        <Route path="/addresses" element={<Addresses />}/>
                    </Routes>
                </BrowserRouter>
            </main>
            <Footer />
        </>
    );
}

export default App;
