import './footer.css';

function Footer() {
    return (
        <footer>
            <div>
                <img src={require("../Imagens/LogoAutoescola.png")} alt="" width="84" />
            </div>
            <div className="nomesAlunosFooter">
                <h3>Bruno Hugo Knaesel, Elaine Martina André e Yuri Trierveiler</h3>
            </div>
        </footer>
    );
}
export default Footer;

