import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function SobreNos() {

  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);

  const navigate = useNavigate();

  const handleSaibaMaisClick = () => {
    navigate('/'); // Redireciona para a página Home
  };

  return (
    <div>
      <Header />

      <main>
        <section style={styles.hero}>
          <div style={styles.overlay}>
            <h1 style={styles.heroTitle}>A cidade que não dorme</h1>
          </div>
        </section>

        <section style={styles.quemSomos}>
          <div style={styles.content}>
            <div style={styles.fotoGrupo}>
              <div style={styles.fotoPlaceholder}>
                <p>Foto do Grupo</p>
              </div>
            </div>

            {/* Container da descrição e botão juntos */}
            <div style={styles.descricaoContainer}>
              <div style={styles.descricao}>
                <h2 style={styles.titulo}>QUEM SOMOS?</h2>
                <p style={styles.texto}>
                  Nosso time é composto por cinco estudantes de Ciências da
                  Computação, todos no segundo semestre na FECAP: Pedro Henrique
                  Lemos, Guilherme dos Reis Fogolin, Lucas Moreira, André
                  Gregório e Yan Ramos Cezareto.
                </p>
                <p style={styles.texto}>
                  Este projeto tem como objetivo criar um site que reúne
                  serviços gratuitos ou a preços acessíveis disponíveis na
                  cidade de São Paulo.
                </p>
              </div>
              <div style={styles.botaoContainer}>
                <button
                  style={styles.saibaMaisBtn}
                  onClick={handleSaibaMaisClick}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      styles.saibaMaisBtnHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      styles.saibaMaisBtn.backgroundColor)
                  }
                >
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.porqueSite}>
          <div style={styles.content2}>
            <h2 style={styles.titulo2}>Porque estamos fazendo este site?</h2>
            <p style={styles.texto}>
              Estamos desenvolvendo este site com o propósito de facilitar o
              acesso a serviços gratuitos ou a preços acessíveis na cidade de
              São Paulo. Sabemos que muitas pessoas enfrentam desafios
              financeiros e nem sempre têm conhecimento das opções que estão
              disponíveis sem custo ou com valores reduzidos. Nosso objetivo é
              centralizar essas informações de maneira organizada e acessível,
              permitindo que o público encontre, de forma rápida e simples,
              serviços essenciais como saúde, educação, cultura, lazer e muito
              mais. Queremos que o site seja uma ferramenta de apoio para quem
              precisa e que, ao mesmo tempo, ajude a promover iniciativas que
              muitas vezes não recebem a visibilidade necessária.
            </p>
            <p style={styles.texto}>
              Nosso principal objetivo é contribuir com a sociedade, utilizando
              a tecnologia para resolver um problema real e relevante.
              Acreditamos que, ao oferecer uma plataforma completa e bem
              estruturada, podemos impactar positivamente a vida das pessoas e
              ajudar a reduzir desigualdades. Além disso, este projeto também é
              uma excelente oportunidade para aplicarmos nossos conhecimentos
              acadêmicos na prática, trabalhando em equipe e desenvolvendo
              habilidades técnicas e interpessoais que serão fundamentais para
              nossas futuras carreiras como profissionais de TI.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  hero: {
    height: "450px",
    width: "100%",
    backgroundImage: "url(/img/spsobrenos.jpg)", // Atualize para o caminho correto
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Escurece a imagem de fundo
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
  },
  quemSomos: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
    backgroundColor: "#111",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1000px",
    width: "100%"
  },
  content2: {
    display: "block",
    width: "100%",
    maxWidth: "1000px",
    padding: "0 20px",
  },
  fotoGrupo: {
    flex: 1,
    marginRight: "20px",
  },
  fotoPlaceholder: {
    width: "100%",
    marginRight: "400px",
    height: "500px",
    backgroundColor: "#ccc",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    color: "#000",
  },
  descricaoContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column", // Itens ficam um embaixo do outro
    justifyContent: "space-between", // Espalha os itens (texto e botão)
    padding: "10px",
  },
  descricao: {
    marginLeft: "170px",
    marginBottom: "20px", // Espaçamento entre descrição e botão
  },
  titulo: {
    color: "#9B0202",
    fontSize: "5rem",
    lineHeight: "100%",
    marginBottom: "10px",
  },
  titulo2: {
    color: "#9B0202",
    fontSize: "2rem",
    marginBottom: "30px",
    textAlign: "left",
  },
  texto: {
    fontSize: "1.1rem",
    lineHeight: "1.5",
    marginBottom: "10px",
    color: "#fff",
    textAlign: "left",
  },
  porqueSite: {
    padding: "50px 20px",
    backgroundColor: "#111",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  botaoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  saibaMaisBtn: {
    fontSize: "1.2rem",
    padding: "10px 50px",
    backgroundColor: "#9B0202",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    alignSelf: "flex-start", // Alinha o botão à esquerda
  },
  saibaMaisBtnHover: {
    backgroundColor: "#d11a1a",
  },
};

export default SobreNos;