import React from "react"; // Importa o React
import styles from "../styles/DetalhesMateria.module.css"; // Importa os estilos CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente de ícone do FontAwesome
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Importa os ícones das redes sociais

// Componente principal DetalhesMateria
const DetalhesMateria = () => {
  return (
    <div>
      {/* Cabeçalho fixo */}
      <header className={styles.header}>
        {/* Lado esquerdo do cabeçalho */}
        <div className={styles.headerLeft}>
          <a href="/home"><img
            src="https://i.ibb.co/0mNPbKy/Logo.png" // Caminho da imagem da logo
            alt="Logo" // Texto alternativo para a imagem
            className={styles.logoImage} // Aplica os estilos da logo
          />
          </a>
          <div className={styles.logoText}>Área do Aluno</div> {/* Texto "Área do Aluno" */}
        </div>
        {/* Menu de navegação */}
        <nav className={styles.menu}>
          <a href="/materias">Matérias</a>
          <a href="#">Pagamentos</a>
          <a href="#">Grade Horária</a>
          <a href="#">Trabalhos</a>
        </nav>
        {/* Ícones das redes sociais */}
        <div className={styles.headerRight}>
          <a
            href="https://www.instagram.com" // Link para o Instagram
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer" // Evita riscos de segurança
            className={`${styles.icon} ${styles.instagramIcon}`} // Aplica os estilos
          >
            <FontAwesomeIcon icon={faInstagram} /> {/* Ícone do Instagram */}
          </a>
          <a
            href="https://www.facebook.com" // Link para o Facebook
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.facebookIcon}`} // Aplica os estilos
          >
            <FontAwesomeIcon icon={faFacebook} /> {/* Ícone do Facebook */}
          </a>
          <a
            href="https://www.whatsapp.com" // Link para o WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.whatsappIcon}`} // Aplica os estilos
          >
            <FontAwesomeIcon icon={faWhatsapp} /> {/* Ícone do WhatsApp */}
          </a>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className={styles.content}>
        <section className={styles.topSection}>
          {/* Cartões com informações */}
          <div className={`${styles.card} ${styles.largeCard}`}>
            <h3>Língua Portuguesa</h3>
            <p>
              <strong>Professor:</strong> <span>Felipe Lima</span>
            </p>
          </div>
          {/* Presença do aluno */}
          <div className={styles.card}>
            <h3>Presença:</h3>
            <p>
              14/16 - <span>87.5%</span>
            </p>
            <p>Faltas: 02/16</p>
            <button className={styles.btnYellow}>Contestar falta</button> {/* Botão para contestar faltas */}
          </div>
          {/* Notas do aluno */}
          <div className={styles.card}>
            <h3>Nota:</h3>
            <div className={styles.grades}>
              <div>
                <p>1ª Avaliação</p>
                <p>10.00</p>
              </div>
              <div>
                <p>2ª Avaliação</p>
                <p>10.00</p>
              </div>
              <div>
                <p>Final</p>
                <p>0</p>
              </div>
              <div>
                <p>Média</p>
                <p>10.00</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.bottomSection}>
          <div className={styles.card}>
            <h3>Material:</h3>
            <p>O professor ainda não postou material</p>
          </div>
          {/* Tabela com trabalhos e seus status */}
          <div className={styles.card}>
            <h3>Trabalhos:</h3>
            <table>
              <thead>
                <tr>
                  <th>Trabalho</th>
                  <th>Data</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Resumo do capítulo 1</td>
                  <td>12/11/2024</td>
                  <td className={`${styles.status} ${styles.pending}`}>Pendente</td>
                </tr>
                <tr>
                  <td>Redação sobre literatura</td>
                  <td>25/10/2024</td>
                  <td className={`${styles.status} ${styles.delivered}`}>Entregue</td>
                </tr>
                <tr>
                  <td>Trabalho de grupo</td>
                  <td>30/10/2024</td>
                  <td className={`${styles.status} ${styles.late}`}>Atrasado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rodapé */}
        <footer className={styles.footer}>
          <p>&copy; 2024 Área do Aluno</p>
        </footer>
      </main>
    </div>
  );
};

export default DetalhesMateria;
