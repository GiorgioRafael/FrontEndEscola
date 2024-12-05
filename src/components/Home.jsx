import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                   <a href="/home"> <img
                        src="https://i.ibb.co/tMRRHgD/Logo.png"
                        alt="Logo"
                        className={styles.logoImage}
                    />
                    </a>
                </div>
                <nav className={styles.menu}>
                    <a href="#sobre-nos">Sobre Nós</a>
                    <a href="#niveis-de-ensino">Níveis de Ensino</a>
                    <a href="#calendario">Calendário</a>
                    <a href="/#">Contate-nos</a>
                    <a href="/login">Portal do Aluno</a>
                    <a href="/loginp">Portal do Professor</a>
                </nav>
                <div className={styles.headerRight}>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.icon} ${styles.instagramIcon}`}
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.icon} ${styles.facebookIcon}`}
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://www.whatsapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.icon} ${styles.whatsappIcon}`}
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </header>

            <section id="sobre-nos" className={styles.section}>
                <h1>Sobre Nós</h1>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutText}>
                        <p>
                            O Colégio Futuro é uma instituição de ensino localizada
                            em Maceió (Alagoas). Nosso corpo docente é formado por
                            professores altamente qualificados...
                        </p>
                    </div>
                    <div className={styles.aboutImage}>
                        <img
                            src="https://i.ibb.co/84qBMW7/Whats-App-Image-2024-11-28-at-20-38-57.jpg"
                            alt="Imagem sobre nós"
                        />
                    </div>
                </div>
            </section>

            <section id="niveis-de-ensino" className={styles.section}>
                <h1>Níveis de Ensino</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img src="https://i.ibb.co/DfTxFcM/Whats-App-Image-2024-11-28-at-20-39-20.jpg" alt="Ensino Infantil" />
                        <h3>Ensino Infantil</h3>
                        <p>ensino infantil é a primeira etapa da educação. crianças de 4 a 5 anos aprendem através de atividades lúdicas e jogos. desenvolvem habilidades cognitivas e sociais importantes para sua formação.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="https://i.ibb.co/nctM9b8/Whats-App-Image-2024-11-28-at-20-39-52.jpg" alt="Ensino Fundamental" />
                        <h3>Ensino Fundamental</h3>
                        <p>O Ensino Fundamental é a etapa da educação básica para crianças entre 6 a 14 anos, Nesta etapa, é importante para o desenvolvimento intelectual e social dos alunos, preparando-os para a próxima etapa da educação.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="https://i.ibb.co/4FFKQVS/Whats-App-Image-2024-11-28-at-20-40-41.jpg" alt="Ensino Médio" />
                        <h3>Ensino Médio</h3>
                        <p>O ensino médio é a última etapa da educação básica brasileira e tem como objetivo preparar os estudantes para o mercado de trabalho ou para o ensino superior.</p>
                    </div>
                </div>
            </section>

            <section id="calendario" className={styles.section}>
                <h1>Calendário e Horário Escolar</h1>
                <div className={styles.calendarioHorario}>
                    <div className={styles.calendarioItem}>
                        <h2>Calendário Escolar</h2>
                        <p>
                            Aqui você pode ver todos os eventos e datas importantes
                            para o ano letivo...
                        </p>
                        <button className={styles.button}>Ver Calendário Escolar</button>
                    </div>
                    <div className={styles.calendarioItem}>
                        <h2>Horário Escolar</h2>
                        <p>
                            Confira o horário das aulas e atividades para cada nível
                            de ensino...
                        </p>
                        <button className={styles.button}>Ver Horário Escolar</button>
                    </div>
                </div>
            </section>

            <section id="convite-passeio" className={styles.section}>
                <div className={styles.conviteContainer}>
                    <img
                        src="https://animace.com.br/wp-content/uploads/2023/12/Roxo-Forma-do-Vazio-Satoru-Gojo.png.webp"
                        alt="Passeio Virtual"
                        className={styles.conviteImage}
                    />
                    <p>
                        Agora você tem a oportunidade de conhecer o nosso colégio
                        sem sair de casa, através de um passeio virtual.
                    </p>
                    <button className={styles.button}>Faça Seu Passeio Agora</button>
                </div>
            </section>

            <section id="contate-nos" className={styles.section}>
                <h1>Contate-nos</h1>
                <div className={styles.contactContainer}>
                    <div className={styles.contactInfo}>
                        <p>Email: contato@colegiofuturo.com</p>
                        <p>Whatsapp: (82) 94002-8922</p>
                        <p>Instagram: @colegiofuturo</p>
                    </div>
                    <div className={styles.contactForm}>
                        <form>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">Mensagem:</label>
                            <textarea id="message" name="message" required></textarea>
                            <button type="submit" className={styles.button}>
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 Colégio Futuro. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;
