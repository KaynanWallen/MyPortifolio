import { useContext } from "react";
import { PageContext } from "../context/page";


//Pages
import HomePageInicial from "./Home-PageInicial";
import AboutPageInicial from "./About-PageInicial";
import SkillsPageInicial from "./Skills-PageInicial";
import ProjectsPageInicial from "./Projects-PageInicial";
import EmptyPageInicial from "./empty-PageInicial";
//styles

import "../Styles/PageInicial.css";

//Imagens

import vscode_logo from '../assets/img/vscode-logo.png';
import menu from '../assets/img/menu.png';

import html_logo from '../assets/img/html5-logo2.png';
import css_logo from '../assets/img/css-logo.svg';
import js_logo from '../assets/img/js-logo.png';
import react_logo from '../assets/img/react-logo.svg';
import seta from '../assets/img/seta.png';
import close from '../assets/img/close.svg';

import minimaze from '../assets/img/minimaze.png';
import square from '../assets/img/square.png';


function RemoveTab(id) {
    var x = document.getElementById(id);
        x.style.display = "none";
}

function AddTab(id) {
    var x = document.getElementById(id);
    x.style.display = "flex";
}

function ArrowAndElements(id1,id2,id3,id4){
    var array = [id1,id2,id3,id4];
    array.map((id) => {
        var x = document.getElementById(id);
        
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
        }
    });
}

function NavBarMobile() {
    var menu = document.getElementById("Sections-Main");
    menu.classList.toggle("Mobile");
    var menu2 = document.getElementById("Sections-Center");
    menu2.classList.toggle("Mobile");
}
const PageInicial = () => {

    const [PageState, dispatch] = useContext(PageContext);

    return (
    <div className="PageInicial">
        <header>
            <div className="Logo-and-infos">
                <img src={vscode_logo} alt="Vscode Logo" />
                <img src={menu} alt="menu" className="Btn-Mobile" onClick={() => {
                    NavBarMobile()
                    if(!PageState.StatePage){dispatch({ type: "PageStageContent_Empty" })}
                    }}/>
            </div>

            <div className="LogoName">
                <p>Portifólio - Visual Studio Code</p>
            </div>

            <div className="minimize-open-close">
                <img src={minimaze} alt="minimaze"/>
                <img src={square} alt="close"/>
                <img onClick={() => dispatch({ type: "WindowsPageState" })}
                src={close} alt="close"/>
            </div>
        </header>

        <main>
            <div className="Sections-Left">
            </div>
            <div className="Sections-Center" id="Sections-Center">
                <div className="explorer">
                    <p>EXPLORER</p>
                    <p className="points">...</p>
                </div>
                <div className="portifolio">
                    <img onClick={() => ArrowAndElements("New_Html", "New_Css", "New_Js", "New_React", "New_Html") } src={seta} alt="HTML5 Logo"/>
                    <p>Portifolio</p>
                </div>
                <div className="sections">
                    <div className="html_logo" onClick={() => AddTab("Html_aba")} id ="New_Html">
                        <img className="html_logo" src={html_logo} alt="HTML5 Logo" />
                        <p>Home.html</p>
                    </div>
                    <div className="css_logo" onClick={() => AddTab("Css_aba")} id ="New_Css">
                        <img className="css_logo" src={css_logo} alt="CSS Logo" />
                        <p>About.css</p>
                    </div>
                    <div className="js_logo" onClick={() => AddTab("Js_aba")} id ="New_Js">
                        <img className="js_logo" src={js_logo} alt="JavaScript Logo" />
                        <p>Projetcs.js</p>
                    </div>
                    <div className="react_logo" onClick={() => AddTab("React_aba")} id ="New_React">
                        <img className="react_logo" src={react_logo} alt="JavaScript Logo" />
                        <p>Skills.jsx</p>
                    </div>
                </div>
            </div>

            <div className="Sections-Main" id="Sections-Main">
                <div className="Sections-Main-Footer" id="Sections-Main-Footer">
                  <div id="Html_aba">
                    <img onClick={() => dispatch({ type: "PageStageContent_Home" })} src={html_logo} alt="Windows Logo"/>
                    <p onClick={() => dispatch({ type: "PageStageContent_Home" })} >Home.html</p>
                    <img src={close} alt="close" className="close" onClick={() => {
                        RemoveTab("Html_aba")
                        dispatch({ type: "PageStageContent_Empty" })
                        }}/>
                  </div>
                  <div id="Css_aba">
                     <img  onClick={() => dispatch({ type: "PageStageContent_About" })} src={css_logo} alt="Windows Logo" />
                     <p onClick={() => dispatch({ type: "PageStageContent_About" })}>About.css</p>
                     <img src={close} alt="close" className="close" onClick={() => {
                        RemoveTab("Css_aba")
                        dispatch({ type: "PageStageContent_Empty" })
                        }}/>
                  </div>

                  <div id="Js_aba">
                     <img onClick={() => dispatch({ type: "PageStageContent_Projects" })} src={js_logo} alt="Windows Logo" />
                     <p onClick={() => dispatch({ type: "PageStageContent_Projects" })}  >Projetcs.js</p>
                     <img src={close} alt="close" className="close" onClick={() => {
                        RemoveTab("Js_aba")
                        dispatch({ type: "PageStageContent_Empty" })
                        }}/>
                  </div>

                  <div id="React_aba">
                    <img onClick={() => dispatch({ type: "PageStageContent_Skills" })} src={react_logo} alt="Windows Logo"/>
                    <p onClick={() => dispatch({ type: "PageStageContent_Skills" })}>Skills.jsx</p>
                    <img src={close} alt="close" className="close" onClick={() => {
                        RemoveTab("React_aba")
                        dispatch({ type: "PageStageContent_Empty" })
                        }}/>
                  </div>


                </div>
                {PageState.PageStageContent === "Home" && <HomePageInicial />}
                {PageState.PageStageContent === "About" && <AboutPageInicial />}
                {PageState.PageStageContent === "Projects" && <ProjectsPageInicial />}
                {PageState.PageStageContent === "Skills" && <SkillsPageInicial />}
                {PageState.PageStageContent === "Empty" && <EmptyPageInicial />}

            </div>
        </main>
    </div>
  );
};

export default PageInicial;
