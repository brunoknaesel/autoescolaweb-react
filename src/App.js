import './App.css';
import HomeLogin from './Pages/HomeLogin';
import CadastroAula from './Pages/CadastroAula';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLogin />} />
                    <Route path="/cadastroaula" element={<CadastroAula />} />
                </Routes>


            </BrowserRouter>
        </>
    );
}

export default App;
