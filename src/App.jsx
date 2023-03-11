
import './App.css'
import { PageContext } from './context/page.jsx';
import { useContext, useEffect } from "react";

import PageInicial from './Components/PageInicial.jsx';
import WindowsPage from './Components/WindowsPage.jsx';

function App() {
  const [PageState, dispatch] = useContext(PageContext);

  return (
    <div className="App">
            {PageState.PageStage === "PageInicial" && <PageInicial />}
            {PageState.PageStage === "Windows" && <WindowsPage />}
    </div>
  )
}

export default App
