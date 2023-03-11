import { useContext } from "react";

import { PageContext } from "../context/page";

//Imagems
import programer2 from "../assets/img/icons-Programer-About.png";
import download from   "../assets/img/download.png"

import "../Styles/About-PageInicial.css";

const AboutPageInicial = () => {

    const [PageState, dispatch] = useContext(PageContext);
    
    console.log('teste');
    return (
        <div className="Sections-Main-Content">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');
            </style>
            <div className="About-Container">
                <div className="Title-About">
                    <h2>About</h2>
                </div>
                <div className="Content-About">
                    <p>Sou um estudante de programação fascinado por computadores e códigos. Meu primeiro 
                        contato com códigos foi durante a pandemia, por ser fascinado por jogos acabei 
                        encontrando um espaço para me aventurar em códigos .lua, fazendo com que me 
                        apaixonasse pela programação e me inscrevesse para o técnico em análise e 
                        desenvolvimento de sistemas oferecido pela ETEC. No momento procuro por uma 
                        primeira oportunidade de emprego, buscando colocar em prática o que estudo e 
                        obter experiência profissional.</p>

                    <img id ="programer2"src={programer2} alt="programer2" />

                </div>
                <button className="btn-cv">
                    <img src={download} alt="download" /> 
                    <p>Baixar CV</p>
                </button>
        </div>
        </div>
    )
};

export default AboutPageInicial;