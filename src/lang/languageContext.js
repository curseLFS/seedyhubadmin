import { createContext, useReducer } from "react";
import LanguageReducer from "./languageReducer";

const INITIAL_STATE = {
    lang: 'en'
};

export const LanguageContext = createContext(INITIAL_STATE)

export const LanguageContextProvider = ({children}) => {
    const [state, choice] = useReducer(LanguageReducer, INITIAL_STATE);

    return (
        <LanguageContext.Provider value={{lang: state.lang, choice }}>
            {children}
        </LanguageContext.Provider>
    )
};