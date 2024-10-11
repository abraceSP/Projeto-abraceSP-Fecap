import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomeServicos = styled.div`
  /* Design para abaixo do header */
  .containerSuperior {
    width: 100%;
    min-height: 60vh;
    background-image: url("img/educacao/headEducacao.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: justify;
    align-items: center;
    padding: 20px;
  }

  .contentSuperior h1 {
    font-size: 48px;
    margin-bottom: 20px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    margin-bottom: 20px; /* Ajuste a margem conforme necessário */
    transition: transform 0.3s ease;
  }

  .containerSuperior h1:hover {
    transform: scale(1.02);
  }

  .contentSuperior h2 {
    font-size: 25px;
    margin-bottom: 20px; /* Ajuste a margem conforme necessário */
    font-family: "Inter", sans-serif;
    font-weight: bold;
    color: #fff;
  }

  .contentSuperior p {
    font-size: 16px;
    margin-bottom: 20px; /* Ajuste a margem conforme necessário */
    font-family: "Inter", sans-serif;
    color: #fff;
  }

  .abrace {
    color: #fff;
  }

  .sp {
    color: #9b0202;
  }
`;

const Cards = styled.div`
  background-color: #000;
  padding: 40px 20px;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Define 3 colunas para os cards */
    gap: 20px; /* Espaçamento entre os cards */
  }

  .card {
    background-color: #1f1e1e;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card:hover {
    transform: translateY(-10px); /* Efeito de hover */
  }

  .card-image {
    width: 100%;
    height: 180px; /* Altura fixa para as imagens */
    object-fit: cover;
    border-radius: 8px;
  }

  .card-title {
    font-size: 1.5rem;
    margin: 20px 0 10px 0;
    color: #fff;
    font-family: "Inter", sans-serif;
    cursor: pointer;
  }

  .card-title:hover {
    color: #9b0202;
  }

  .card-description {
    font-size: 1rem;
    color: #fff;
    font-family: "Inter", sans-serif;
    margin: 10px 0;
    flex-grow: 1;
  }

  .card-link {
    color: #9b0202;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  .card-link:hover {
    color: #fff;
  }

  .subtituloCards {
    color: #9b0202;
    margin-top: 5px;
    font-family: "Inter", sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }

  .tituloCards {
    color: #fff;
    margin-top: 5px;
    margin-bottom: 30px;
    font-family: "Inter", sans-serif;
    font-size: 2.5rem;
    text-align: left;
    font-weight: bold;
  }

  .text {
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 30px;
  }

  .tituloEducacao{
    color: #9b0202;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 29px;
  }
`;

function Educacao() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/#contato"); // Navega para a página HOME e para o container 'servicos'
  };

  return (
    <div>
      <Header />

      <HomeServicos>
        <div className="containerSuperior">
          <div className="contentSuperior">
            <h1>
              <span className="abrace"> Educ</span>
              <span className="sp">ação </span>
            </h1>
            <h2>
              Você encontrará cursos online, certificações, oficinas, workshops
              gratuitamente ou em promoção!
            </h2>
          </div>
        </div>
      </HomeServicos>

      <Cards>
        {/* Mantendo o título e o texto fora do cards-container */}
        <p className="tituloEducacao">
          EDUCAÇÃO
        </p>
        <h1 className="tituloCards">
          Cursos online <span className="sp">gratuitos!</span>
        </h1>
        <p className="text">
          Cursos gratuitos com certificações, de diversos temas! Aqui você
          encontrará os mais em alta.
        </p>

        <div className="cards-container">
          {/* Linha de cartões */}
          <div className="card">
            <img
              src="img/educacao/sebraeMiniatura.png"
              alt="Imagem 1"
              className="card-image"
            />
            <h3 className="card-title">Sebrae</h3>
            <p className="card-description">
              Uma das maiores plataformas de cursos online do Brasil, a Sebrae
              proporciona cursos de marketing, empreendedorismo e muito mais!
            </p>
            <Link className="card-link" to="/acolhimento/servicos25">
              Veja Mais!
            </Link>
          </div>

          <div className="card">
            <img
              src="img/saudeMental/sinpesp.jpg"
              alt="Imagem 2"
              className="card-image"
            />
            <h3 className="card-title">SINPESP</h3>
            <p className="card-description">
              O valor mínimo de cada sessão é, em média, R$ 40, definido de
              acordo com a condição financeira do paciente.
            </p>
            <Link className="card-link" to="/acolhimento/servicos26">
              Veja Mais!
            </Link>
          </div>

          <div className="card">
            <img
              src="img/saudeMental/AnaMariaPopo.jpg"
              alt="Imagem 3"
              className="card-image"
            />
            <h3 className="card-title">Clínica Ana Maria Popovic</h3>
            <p className="card-description">
              A Clínica Psicológica 'Ana Maria Poppovic' oferece terapia para
              casais e famílias, crianças e adultos.
            </p>
            <Link className="card-link" to="/acolhimento/servicos27">
              Veja Mais!
            </Link>
          </div>
        </div>
      </Cards>

      <Footer />
    </div>
  );
}

export default Educacao;
