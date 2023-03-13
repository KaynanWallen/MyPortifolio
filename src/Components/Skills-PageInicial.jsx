import { useContext } from "react";

import { PageContext } from "../context/page";



import '../Styles/Skills-PageInicial.css';

//Imagens
import programer3 from "../assets/img/icons-Programer-Skills.png";
//Imagens Logo
import html_logo from '../assets/img/html5-logo2.png';
import css_logo from '../assets/img/css-logo.svg';
import js_logo from '../assets/img/js-logo.png';
import react_logo from '../assets/img/react-logo.svg';
import node_logo from '../assets/img/node-logo.svg';
import mongodb_logo from '../assets/img/mongodb-logo.svg';
import typescript_logo from '../assets/img/typescript-logo.svg';

const SkillsPageInicial = () => {
    const [PageState, dispatch] = useContext(PageContext);
    return (
        <div className="Sections-Main-Content">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');
            </style>
            <div className="Skills-container">
                <div className="Title-Skills">
                    <h2>Skills</h2>
                </div>
                <div className="Content-Skills">
                    <div className="All-Skills">
                        <div>
                            <div className="Content-Skills-Ind">
                                <h3>HTML5</h3>
                                <p>Linguagem de Marcação</p>
                            </div>
                            <img src={html_logo} alt="HTML5" />
                        </div>
                        <div>
                            <div className="Content-Skills-Ind">
                                <h3>CSS</h3>
                                <p>Linguagem De Estilos</p>
                            </div>
                            <img src={css_logo} alt="HTML5" />
                        </div>
                        <div>
                            <div className="Content-Skills-Ind">
                                <h3>JavaSript</h3>
                                <p>Linguagem de Programação</p>
                            </div>
                            <img src={js_logo} alt="HTML5" />
                        </div>
                        <div>
                            <div className="Content-Skills-Ind">
                                <h3>ReactJs</h3>
                                <p>Biblioteca de Programação JavaScript</p>
                            </div>
                            <img src={react_logo} alt="HTML5" />
                        </div>
                        <div>
                            <div className="Content-Skills-Ind">
                                <h3>NodeJS</h3>
                                <p>Ambiente de Execução JavaScript</p>
                            </div>
                            <img src={node_logo} alt="HTML5" />
                        </div>
                    </div>
                    <img id ="programer3"src={programer3} alt="programer2" />
                </div>
                </div>
        </div>
    )
};

export default SkillsPageInicial;