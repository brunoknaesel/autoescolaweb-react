import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Header from '../../Components/Header';
import MenuLateral from '../../Components/MenuLateral';
import Form from '../../Components/Form';
import Table from '../../Components/Table'
import Footer from '../../Components/Footer';

function CadastroAula() {
    return (
        <>
            <Header />

            <main>
                <div className="main">

                    <div className="menuLateral">
                        <MenuLateral />
                    </div>

                    <div className="principalCadastroAula">

                        <div className="principalLogo">
                            <div>
                                <img src={require('../../Imagens/LogoAutoescola.png')} alt="" width="300" />
                            </div>
                        </div>

                        <div className="principalAgendamento">

                            <div className="agendarAulas">
                                <div className="tituloForm">
                                    <h2>Agendamento de Aulas</h2>
                                </div>

                                <Form />
                            </div>

                            <div className="tabelaAulas">
                                <Table />
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}
export default CadastroAula;
