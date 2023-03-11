import { useContext } from "react";

import { PageContext } from "../context/page";


import '../Styles/Projects-PageInicial.css';

import internet from '../assets/img/internet.png';
import github from '../assets/img/github.png';

const ProjectsPageInicial = () => {
    const [PageState, dispatch] = useContext(PageContext);
    return (
        <div className="Sections-Main-Content">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');
            </style>
            <div className="Projects-Container">
                <div className="Title-Projects">
                    <h2>Projects</h2>
                </div>
                <div className="Projects">
                    <div className="Project-row">
                        <div id="ProjetosJS" className="ImageProject-and-technologies">
                            <div className="technologies">
                                <h3>Tecnologias</h3>
                                <div className="Desc-technologies">
                                    <p>-HTML</p>
                                    <p>-Css</p>
                                    <p>-JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div className="Description-Project">
                            <h3>Projetos em JS</h3>
                            <p>Esse projeto é uma demonstração das minhas habilidades de javaScript, nele contém diversos programas feitos com js puro</p>
                            <div className="Button-Project">
                                <button>
                                    <img src={github} alt="" />
                                    <p>GitHub</p>
                                </button>
                                <button>
                                    <img src={internet} alt="" />
                                    <p>Site</p>
                                </button>
                            </div>
                        </div> 
                    </div>


                    <div className="Project-row">
                        <div id="Portifolio" className="ImageProject-and-technologies">
                            <div className="technologies">
                                <h3>Tecnologias</h3>
                                <div className="Desc-technologies">
                                    <p>-HTML</p>
                                    <p>-Css</p>
                                    <p>-JavaScript</p>
                                    <p>-ReactJs</p>
                                </div>
                            </div>
                        </div>
                        <div className="Description-Project">
                            <h3>Portfólio</h3>
                            <p>Esse projeto tem como intuito ser a porta de entrada para a minha vida como programador, tem como objetivo demonstrar meus projetos e consequêntemente minhas habilidade</p>
                            <div className="Button-Project">
                                <button>
                                    <img src={github} alt="" />
                                    <p>GitHub</p>
                                </button>
                                <button>
                                    <img src={internet} alt="" />
                                    <p>Site</p>
                                </button>
                            </div>
                        </div> 
                    </div> 
                    
                                    
                </div>
            </div>
        </div>
    )
};

export default ProjectsPageInicial;