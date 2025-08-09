import Footer from "../../Components/Footer/footer";
import Header from "../../Components/Header/header";

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <section className="section_textHome">
          <div className="div_titleHome">
            <h1>Fernando Álisson</h1>
            <p>Desenvolvedor Full Stack</p>
          </div>
          <div className="div_buttonHome">
            <button className="button_buttonHome">
              Acessar Meus Projetos
            </button>
          </div>
        </section>
        <section className="imageHome">
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/72525421?s=460&u=3d3c3f7d6f8f1d3b4b9b5d64f8d3a8c1d4d3d3f&v=4"
              alt="Álisson Santos"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;