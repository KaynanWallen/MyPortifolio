import { useContext } from "react";

import { PageContext } from "../context/page";

const EmptyPageInicial = () => {

    const [PageState, dispatch] = useContext(PageContext);
    
    return (
        <div className="Sections-Main-Content">
            <style>
            @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');
            </style>
        </div>
    )
};

export default EmptyPageInicial;