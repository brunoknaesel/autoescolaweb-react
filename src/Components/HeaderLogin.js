
import { Link } from 'react-router-dom';
import './headerlogin.css';

function HeaderLogin() {
    return (
        <header className="headerLogin">
            <div className="logoCarroHeader">
                <img src={require("../Imagens/LogoCarro.png")} alt="" width="140" />
            </div>

            <div className="textosHeader">
                <ul>
                    <li className="alinhaHeader">Início</li>
                    <li className="alinhaHeader">Sobre</li>
                    <li className="alinhaHeader">Localização</li>
                    <li className="alinhaHeader">Contato</li>
                </ul>
            </div>

            <div className="botoes">
                <Link to="/cadastroaula"><button className="botaoEntrar" type="button">Entrar</button></Link>

                <button className="botaoCadastrar" type="button">Cadastrar</button>
            </div>

        </header>
    );
}
export default HeaderLogin;

