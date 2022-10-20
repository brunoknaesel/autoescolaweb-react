import './menulateral.css';

import { FaUserAlt, FaCar, FaCaretRight, FaBookOpen, FaRegClipboard, FaRegIdCard } from 'react-icons/fa';

function MenuLateral() {
    return (
            < div className="menu" >
                <div className="itens">
                    <a className="subMenuBtn">
                        <FaUserAlt />        Dados pessoais<i className="dropdown">            <FaCaretRight size={15} /></i>
                    </a>
                    <div className="subMenuConteudo">
                        <a className="subItens">Aluno</a>
                        <a className="subItens">Frequência</a>
                    </div>
                </div>
                <div className="itens">
                    <a className="subMenuBtn">
                    <FaCar />        Aulas<i className="dropdown">            <FaCaretRight size={15} /></i>
                    </a>
                    <div className="subMenuConteudo">
                        <a className="subItens">Agendamento</a>
                        <a className="subItens">Consulta</a>
                    </div>
                </div>
                <div className="itens">
                    <a className="subMenuBtn">
                    <FaBookOpen />        Conteúdos<i className="dropdown">            <FaCaretRight size={15} /></i>
                    </a>
                    <div className="subMenuConteudo">
                        <a className="subItens">Material</a>
                        <a className="subItens">Video-aulas</a>
                    </div>
                </div>
                <div className="itens">
                    <a className="subMenuBtn">
                    <FaRegClipboard />        Avaliações<i className="dropdown">            <FaCaretRight size={15} /></i>
                    </a>
                    <div className="subMenuConteudo">
                        <a className="subItens">Provas</a>
                        <a className="subItens">Notas</a>
                    </div>
                </div>
            <div className="itens"><a><FaRegIdCard />        Instrutores</a></div>
            </div >
    );
}
export default MenuLateral;
