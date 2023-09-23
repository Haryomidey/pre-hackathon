import { createContext } from "react";

export const Context = createContext();

    // const timeline = useRef();
    // const overview = useRef();
    // const faqs = useRef();

    // const scrollToSection = (ref) => {
    //     ref.current.scrollIntoView({ behavior: 'smooth' });
    // };

// const values = { timeline, overview, faqs, scrollToSection };

const ContextWrapper = ({children}) => {
    return (
        <Context.Provider value={null}>
            {children}
        </Context.Provider>
    )
}

export default ContextWrapper;