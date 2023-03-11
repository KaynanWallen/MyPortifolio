import { useContext } from "react";

import { PageContext } from "../context/page";

import programer1 from '../assets/img/icons-Programer-Home.png';

import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedln.png';

import '../Styles/Home-PageInicial.css';

const HomePageInicial = () => {
    const [PageState, dispatch] = useContext(PageContext);
    return (
        <div className="Sections-Main-Content" id="Sections-Main-Content">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');
            </style>
    
        <div className="Name">
            <p>apenas testando</p>
            <h1>Kaynan Wallen</h1>
            <h3>And I'm a Front-End developer</h3>

            <div className="Links">
                <a href="https://github.com/KaynanWallen" target="_blank" > <img src={github} alt="Windows Logo" /> </a>
                <a href="https://www.linkedin.com/in/kaynan-wallen-9b542024a/" target="_blank" >   <img src={linkedin} alt="Windows Logo" /> </a>
            </div>
        </div>
        <div className="Imagem-PageInicial">
            <img id = "programer1" src={programer1} alt="Windows Logo" />
        </div>
        </div>
    )
};

export default HomePageInicial;