
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header>
            <div className="logoCarroHeader">
                <img src={require("../Imagens/LogoCarro.png")} alt="" width="140" />
            </div>

            <div className="textosHeader">
                <ul>
                    <li className="alinhaHeader">Início</li>
                    <li className="alinhaHeader"><a>Sobre</a></li>
                    <li className="alinhaHeader">Localização</li>
                    <li className="alinhaHeader">Contato</li>
                </ul>
            </div>

            <div className="barraPesquisaHeader">
                <form action="#">
                    <input className="barraPesquisaHeader" type="text" placeholder="  Pesquisar..." name="search" />
                    <button type="submit"></button>
                </form>
            </div>

            <div className="infoUsuario">
                <h1>       Olá Laura</h1>
                <button>
                    <a>Minha conta   </a>
                </button>
                <button>
                    <Link to="/">Sair</Link>
                </button>
            </div>
            <div>
                <img className="usuarioLogo" src={require("../Imagens/laura.png")} width="41" />
            </div>

        </header>
    );
}
export default Header;

