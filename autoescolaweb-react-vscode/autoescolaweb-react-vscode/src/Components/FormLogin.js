import './formlogin.css';

function FormLogin() {
    return (
        <div className="formulario">
            <form>
                <div className="formularioHeader">
                    <div className="titulos">
                        <h1 className="titulo">Seja Bem-Vindo</h1>

                        <h3 className="subTitulo">Por favor insira seus dados</h3>
                    </div>

                </div>

                <div className="grupoInputs">

                    <div className="caixaInputs">
                        <label>E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Por favor insira seu e-mail"
                            required/>
                    </div>

                    <div className="caixaInputs">
                        <label>Senha</label>
                        <input id="password" type="password" name="password"
                            placeholder="Por favor insira sua senha" required/>
                    </div>

                </div>

                <div className="lembrarEsquecer">
                    <div className="checkBoxs">
                        <input type="checkbox" id="lembrar" name="lembrar"/>
                            <label>Lembrar-me</label>
                    </div>

                    <div className="esqueciSenha">
                        <a className="esqueciSenha">Esqueceu sua senha?</a>
                    </div>
                </div>

                <div className="botaoEntrarForms">
                    <button>Entrar</button>
                </div>

            </form>

            <div className="divBotaoGoogle">
                <button className="botaoEntrarGmail">
                    <img src="Imagens/LogoGoogle.png" alt="" width="20"/>Entrar com o Google
                </button>
            </div>

            <div className="naoTemConta">
                <h3>Nao tem uma conta? <a className="botaoIrCadastrar">Cadastrar</a></h3>
            </div>

        </div>
    )
}
export default FormLogin;