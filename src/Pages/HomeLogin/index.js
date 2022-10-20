import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from '../../Components/HeaderLogin';
import Footer from '../../Components/Footer';
import FormLogin from '../../Components/FormLogin';

function HomeLogin() {
    return (
        <>
            <Header />
            <div className="principalLogin">
                <FormLogin />
                <img className="fundoForms" alt=""/>
            </div>
            <Footer />
        </>
    )
}
export default HomeLogin;
