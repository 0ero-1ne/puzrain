import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about';
import PLP from './pages/plp';
import Main from './pages/main';

import './App.css';

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
