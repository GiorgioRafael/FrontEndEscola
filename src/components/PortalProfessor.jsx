import React, { useState } from "react"; // Importa o React e o hook useState para gerenciar o estado.
import styles from "../styles/PortalProfessor.module.css"; // Importa os estilos CSS do módulo PortalProfessor.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa o componente FontAwesomeIcon.
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Importa os ícones das redes sociais.
import { Link } from "react-router-dom";

const PortalProfessor = () => {
  // Hooks para gerenciar o estado da aplicação
  const [selectedClass, setSelectedClass] = useState(null); // Armazena a turma selecionada.
  const [selectedStudent, setSelectedStudent] = useState(null); // Armazena o aluno selecionado.
  const [grades, setGrades] = useState({
    // Objeto que armazena as notas de cada aluno por bimestre
    "Alice Silva": { 1: 9.5, 2: 8.0, 3: 7.5, 4: 9.0 },
    "Bruno Lima": { 1: 8.0, 2: 9.0, 3: 8.5, 4: 9.5 },
    "Carla Souza": { 1: 7.0, 2: 8.5, 3: 9.0, 4: 9.0 },
    "Daniel Rocha": { 1: 8.5, 2: 8.0, 3: 8.5, 4: 9.0 },
    "Elisa Andrade": { 1: 9.0, 2: 9.5, 3: 9.0, 4: 9.0 },
    "Fernando Reis": { 1: 7.5, 2: 8.5, 3: 8.0, 4: 8.5 },
    "Gabriel Martins": { 1: 6.5, 2: 7.5, 3: 8.0, 4: 8.5 },
    "Helena Santos": { 1: 8.5, 2: 9.0, 3: 9.5, 4: 9.0 },
    "Iago Oliveira": { 1: 7.0, 2: 7.5, 3: 8.0, 4: 8.5 },
  });

  const participants = {
    // Lista de participantes organizados por turma
    1: ["Alice Silva", "Bruno Lima", "Carla Souza"],
    2: ["Daniel Rocha", "Elisa Andrade", "Fernando Reis"],
    3: ["Gabriel Martins", "Helena Santos", "Iago Oliveira"],
  };

  // Função chamada ao selecionar uma turma
  const handleClassSelection = (classId) => {
    setSelectedClass(classId); // Atualiza a turma selecionada.
    setSelectedStudent(null); // Reseta a seleção do aluno.
  };

  // Função chamada ao clicar em um aluno
  const handleStudentClick = (student) => {
    setSelectedStudent(student); // Atualiza o aluno selecionado.
  };

  // Função para atualizar as notas do aluno selecionado
  const handleGradeChange = (bimester, value) => {
    setGrades((prevGrades) => ({
      ...prevGrades, // Mantém as notas anteriores
      [selectedStudent]: {
        ...prevGrades[selectedStudent], // Mantém as notas do aluno selecionado
        [bimester]: parseFloat(value) || "", // Atualiza a nota do bimestre
      },
    }));
  };

  // Função chamada ao salvar as notas
  const handleSaveGrades = () => {
    alert(`Notas do aluno ${selectedStudent} foram salvas!`); // Exibe um alerta com o nome do aluno.
    setSelectedStudent(null); // Fecha o modal de edição de notas
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <a href="/home">
            {/* Logo e link para a página inicial */}
            <img
              src="https://i.ibb.co/0mNPbKy/Logo.png"
              alt="Logo"
              className={styles.logoImage}
            />
          </a>
         
          <div className={styles.logoText}>Portal do Professor</div> {/* Texto do portal */}
        
        </div>
        <nav className={styles.menu}>
          {/* Links do menu */}
          <a href="/home">Home</a>
          <a href="/turmas">Turmas</a>
          <a href="/trabalhos">Trabalhos</a>
          <a href="/ajuda">Ajuda</a>
        </nav>
        <div className={styles.headerRight}>
          {/* Ícones das redes sociais */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.instagramIcon}`}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.icon} ${styles.facebookIcon}`}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
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

      {/* Conteúdo principal */}
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2>Turmas</h2>
          <ul>
            {Object.keys(participants).map((turmaId) => (
              <li
                key={turmaId}
                className={selectedClass === parseInt(turmaId) ? styles.activeClass : ""}
                onClick={() => handleClassSelection(parseInt(turmaId))}
              >
                Turma {turmaId} {/* Exibe as turmas */}
              </li>
            ))}
          </ul>
        </aside>
        <main className={styles.mainContent}>
          <h2>Alunos</h2>
          {selectedClass ? (
            <ul>
              {/* Exibe os alunos da turma selecionada */}
              {participants[selectedClass]?.map((student) => (
                <li
                  key={student}
                  onClick={() => handleStudentClick(student)} // Ao clicar, seleciona o aluno
                  className={`${styles.student} ${
                    selectedStudent === student ? styles.activeStudent : ""
                  }`}
                >
                  {student}
                </li>
              ))}
            </ul>
          ) : (
            <p>Selecione uma turma para ver os participantes.</p> // Mensagem caso nenhuma turma seja selecionada
          )}
        </main>
      </div>

      {/* Modal para edição de notas */}
      {selectedStudent && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Notas de {selectedStudent}</h2> {/* Exibe o nome do aluno */}
            {[1, 2, 3, 4].map((bimester) => (
              <div key={bimester} className={styles.gradeRow}>
                <label>Bimestre {bimester}:</label>
                <input
                  type="number"
                  step="0.01"
                  value={(grades[selectedStudent]?.[bimester] || "").toString()} // Exibe a nota do bimestre
                  onChange={(e) => handleGradeChange(bimester, e.target.value)} // Atualiza a nota ao digitar
                />
              </div>
            ))}
            <button onClick={handleSaveGrades} className={styles.saveButton}>
              Salvar Notas
            </button>
            <button onClick={() => setSelectedStudent(null)} className={styles.closeButton}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortalProfessor;
