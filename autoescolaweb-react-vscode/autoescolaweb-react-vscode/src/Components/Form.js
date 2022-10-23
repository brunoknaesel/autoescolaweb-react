import './form.css';

function validate() {
    let radioPratica = document.forms["formulario"]["pratica"].value;
    let categoria = document.forms["formulario"]["categoria"].value;
    let instrutores = document.forms["formulario"]["instrutores"].value;
    let dataaula = document.forms["formulario"]["dataaula"].value;
    let horarios = document.forms["formulario"]["horarios"].value;
    var resposta = "Favor preencher: \n\r";

    if (radioPratica == "" || categoria == "selecione" || instrutores == "selecione" || dataaula == "" || horarios == "selecione") {

        if (radioPratica == "") {
            resposta += "• Tipo aula\n";
        }
        if (categoria == "selecione") {
            resposta += "• Categoria\n";
        }
        if (instrutores == "selecione") {
            resposta += "• Instrutor\n";
        }
        if (dataaula == "") {
            resposta += "• Data da aula\n";
        }

        if (horarios == "selecione") {
            resposta += "• Horário da aula\n";
        }
        alert(resposta);
        return false;
    }
};

function Form() {
    return (
        <form className="formularioAgendamento" name="formulario">
            <div className="formTipoAula">
                <p>Tipo Aula</p>
                <div className="radioPratica">
                    <input type="radio" value="Pratica" />
                    <label>Pratica</label>
                </div>
                <div className="radioTeorica">
                    <input type="radio" value="Teorica" />
                    <label>Teorica</label>
                </div>
            </div>

            <div className="formItens">
                <p>Categoria</p>
                <select name="categoria" id="categoria">
                    <option value="selecione">Selecione</option>
                    <option value="a">Categoria A</option>
                    <option value="b">Categoria B</option>
                    <option value="c">Categoria C</option>
                    <option value="d">Categoria D</option>
                </select>
            </div>

            <div className="formItens">
                <p>Instrutor</p>
                <select name="instrutor" id="instrutores">
                    <option value="selecione">Selecione</option>
                    <option value="bruno">Bruno H</option>
                    <option value="elaine">Elaine M</option>
                    <option value="yuri">Yuri T</option>
                </select>
            </div>

            <div className="formItens">
                <p>Data</p>
                <input type="date" id="dataaula" name="dataAula" />
            </div>

            <div className="formItens">
                <p>Horarios Disponiveis</p>
                <select name="horario" id="horarios">
                    <option value="selecione">Selecione</option>
                    <option value="8horas">08:00</option>
                    <option value="9horas">09:00</option>
                    <option value="10horas">10:00</option>
                    <option value="11horas">11:00</option>
                    <option value="13horas">13:00</option>
                    <option value="14horas">14:00</option>
                    <option value="15horas">15:00</option>
                    <option value="16horas">16:00</option>
                    <option value="17horas">17:00</option>
                    <option value="18horas">18:00</option>
                    <option value="19horas">19:00</option>
                    <option value="20horas">20:00</option>
                </select>
            </div>

            <div className="botoesAgendamentoForm">
                <input className="botaoLimparForm" type="reset" value="Limpar" />
                <input className="botaoAgendarForm" type="submit" value="Agendar" />
            </div>
        </form>
    );
}
export default Form;
