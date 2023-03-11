
import { createContext, useReducer } from "react";


const STAGES = ["PageInicial", "Windows"];

const STAGES_MAIN = ["Home", "About", "Projects", "Skills", "Empty",]

const initialState = {
  PageStage: STAGES[0],
  PageStageContent: STAGES_MAIN[0],
  StatePage: true,
};

console.log(initialState);

const PageReducer = (state, action) => {

  switch(action.type) {

    case 'PageStageContent_Empty':
      return {
        ...state,
        PageStageContent: STAGES_MAIN[4],

      }
    case 'PageInicialState':
      return {
        ...state,
        PageStage: STAGES[0],
      }
    case 'PageStageContent_Home':
      return {
        ...state,
        PageStageContent: STAGES_MAIN[0],
      }

    case 'PageStageContent_About':
      return {
        ...state,
        PageStageContent: STAGES_MAIN[1],
      }
    case 'PageStageContent_Projects':
      return {
        ...state,
        PageStageContent: STAGES_MAIN[2],
      }


    case 'PageStageContent_Skills':
      return {
        ...state,
        PageStageContent: STAGES_MAIN[3],
      }

    
    case 'WindowsPageState':
      return {
        ...state,
        PageStage: STAGES[1],
      }
      default: 
      return state;
  }
};

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const value = useReducer(PageReducer, initialState)
    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
  };