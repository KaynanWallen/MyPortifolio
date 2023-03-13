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
                                <p>Meu Portfólio, site que servirá como amostra de minhas habilidades</p>
                                <div className="Button-Project">
                                    <a  class="button" href="https://github.com/KaynanWallen/MyPortifolio" target="_blank"><button>
                                        <img src={github} alt="" />
                                        <p>GitHub</p>
                                    </button></a>
                                    <a  class="button" href="https://myportfolio-3mn837w8p-kaynanwallen.vercel.app" target="_blank"><button>
                                        <img src={internet} alt="" />
                                        <p>Site</p>
                                    </button></a>
                                    </div>
                            </div> 
                    </div> 
                    <div className="Project-row">
                        <div id="fazenda" className="ImageProject-and-technologies">
                            <div className="technologies">
                                <h3>Tecnologias</h3>
                                <div className="Desc-technologies">
                                    <p>-HTML</p>
                                    <p>-Css</p>
                                </div>
                            </div>
                        </div>
                        <div className="Description-Project">
                            <h3>Fazenda</h3>
                            <p>Recriação de uma Landing Page feita com HTML e CSS</p>
                            <div className="Button-Project">
                                    <a  class="button" href="https://github.com/KaynanWallen/LandingPage-Fazenda" target="_blank"><button>
                                        <img src={github} alt="" />
                                        <p>GitHub</p>
                                    </button></a>
                                    <a  class="button" href="https://restaurante-fazenda-j552ipwk3-kaynanwallen.vercel.app" target="_blank"><button>
                                        <img src={internet} alt="" />
                                        <p>Site</p>
                                    </button></a>
                            </div>
                        </div>
                    </div> 
                    <div className="Project-row">
                        <div id="Construction" className="ImageProject-and-technologies">
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
                            <h3>Em construção</h3>
                            <p>O projeto ainda está sendo desenvolvido, volte mais tarde por favor</p>
                            <div className="Button-Project">
                                <a class="button" href="" target="_blank"><button>
                                    <img src={github} alt="" />
                                    <p>GitHub</p>
                                </button></a>
                                <a class="button" href="" target="_blank">   <button>
                                    <img src={internet} alt="" />
                                    <p>Site</p>
                                </button></a>
                            </div>
                        </div>
                    </div> 
                             
                </div>
            </div>
        </div>
    )
};

export default ProjectsPageInicial;