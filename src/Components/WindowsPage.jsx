import { useContext } from "react";

import { PageContext } from "../context/page";


import windows_logo from '../assets/img/windows-logo.png';
import lixeira from '../assets/img/lixeira_windows.png';
import vscode_logo from '../assets/img/vscode-logo.png';


import '../Styles/WindowsPage.css';

const WindowsPage = () => {
    const [PageState, dispatch] = useContext(PageContext);
    return (
        <div className="WindowsAndIOS">
            <div className="MobilePage">
                <main>
                    <div className="Apps-Mobile">
                        <div className="VsCode" onClick={() => dispatch({ type: "PageInicialState" })}>
                                <img src={vscode_logo} alt="Windows Logo" />
                                <p>Visual Studio Code</p>
                        </div>
                    </div>
                </main>

                <footer>

                </footer>

            </div>
            <div className="WindowsPage">
                <main>
                    <div className="Apps">
                        <div className="Lixeira">
                            <img src={lixeira} alt="Windows Logo" />
                            <p>Lixeira</p>
                        </div>
                        <div className="VsCode" onClick={() => dispatch({ type: "PageInicialState" })}>
                            <img src={vscode_logo} alt="Windows Logo" />
                            <p>Visual Studio Code</p>
                        </div>
                    </div> 
                </main>
                <footer>
                    <img src={windows_logo} alt="Vscode Logo" />
                </footer>
        </div>
       </div>
    )
};

export default WindowsPage;