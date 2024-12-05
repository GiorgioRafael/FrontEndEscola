import React from "react"; // Importa o React para criar componentes
import styles from "../styles/Materias.module.css"; // Importa os estilos CSS para esta página
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente de ícones do FontAwesome
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Importa os ícones das redes sociais
import { useState } from "react";
// Componente para a página de matérias do aluno
const Materias = () => {

  const [subjects, setSubjects] = useState([
    { title: "Língua Portuguesa", professor: "Felipe Lima" },
    { title: "Língua Inglesa", professor: "Felipe Lima" },
    { title: "Matemática", professor: "Layane" },
    { title: "Biologia", professor: "Pedro Henrique" },
    { title: "Química", professor: "Felipe Lima" },
    { title: "Filosofia", professor: "Felipe Lima" },
    { title: "Robótica", professor: "Alexandre Braga" }
  ]);

  return (
    <div>
      {/* Cabeçalho da página */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {/* Exibe a logo e o texto "Área do Aluno" */}
          <a href="/home">
          <img src="https://i.ibb.co/0mNPbKy/Logo.png" alt="Logo" className={styles.logoImage} />
          </a>
          <div className={styles.logoText}>Área do Aluno</div>
         
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
          {/* Ícone do Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.instagramIcon}`}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          {/* Ícone do Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.facebookIcon}`}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          {/* Ícone do WhatsApp */}
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.whatsappIcon}`}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </header>

      {/* Conteúdo principal da página */}
      <main>
        {/* Container de pesquisa */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search" // Campo para o usuário procurar algo
          />
          {/* Seletor de ano */}
          <select className={styles.yearSelect}>
            <option value="2024">2024</option> {/* Opção de ano */}
          </select>
        </div>

        {/* Seção de matérias */}
        <section className={styles.subjects}>
          {subjects.map((subject, index) => (  // Mapeia a lista de matérias e exibe cada uma
            <a href="/sala" style={{ textDecoration: 'none' }}>
            <div key={index} className={styles.subjectCard}> 
              <h3>{subject.title}</h3> {/* Exibe o título da matéria */}
              <p>
                Professor: <span>{subject.professor}</span> {/* Exibe o nome do professor */}
              </p>
            </div>
            </a>
          ))}
        </section>
      </main>

      {/* Rodapé da página */}
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Materias;  // Exporta o componente Materias para ser usado em outras partes do projeto
