import React from "react"; // Importa o React para a criação de componentes
import styles from "../styles/Login.module.css"; // Importa os estilos CSS para a página de login
import { Link } from "react-router-dom";
// Componente LoginPage que representa a página de login
const LoginPage = () => {
  return (
    <div className={styles.background}> {/* Define o fundo com imagem e centraliza o conteúdo */}
      <div className={styles.loginContainer}> {/* Container principal do formulário de login */}
        <h2>Entrar</h2> {/* Título da página */}
        <form> {/* Formulário para inserir as credenciais */}
          <input type="text" placeholder="Digite sua matrícula" required /> {/* Campo para matrícula */}
          <input type="password" placeholder="Digite sua senha" required /> {/* Campo para senha */}
          <Link to="/materias">
      <button type="submit">Entrar</button>
      </Link> {/* Botão de envio do formulário */}
          <div className={styles.helpLinks}> {/* Links de ajuda abaixo do formulário */}
            <a href="/home">Preciso de ajuda</a>
          </div>
          <div className={styles.options}> {/* Opções como lembrar login e link para matrícula */}
            <label className={styles.checkboxContainer}> {/* Caixa de seleção para lembrar login */}
              <input type="checkbox" />
              <span>Lembrar-me neste dispositivo</span>
            </label>
            <p>
              Deseja se matricular? <a href="/home">Junte-se a nós</a> {/* Link para matrícula */}
            </p>
          </div>
        </form>
      </div>
      <footer className={styles.footer}> {/* Rodapé da página */}
        <div className={styles.footerContent}> {/* Conteúdo do rodapé */}
          <p>
            Email:{" "}
            <a href="mailto:contato@colegiofuturo.com">contato@colegiofuturo.com</a> {/* Link para email */}
          </p>
          <p>
            Whatsapp: <a href="tel:+5582940028922">(82) 94002-8922</a> {/* Link para WhatsApp */}
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/colegiofuturo"
              target="_blank"
              rel="noopener noreferrer"
            >
              @colegiofuturo
            </a> {/* Link para Instagram */}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;  // Exporta o componente LoginPage para ser usado em outras partes do projeto
