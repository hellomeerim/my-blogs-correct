import React,{useContext} from "react";
import LangContext from "../../context/LangContext";
import ThemeContext from "../../context/ThemeContext";

export const Header  = () =>{
    const {lang, setLang} = useContext(LangContext);
    const theme = useContext(ThemeContext);

    return(
        <header className="w3-container w3-center w3-padding-32">
            <h1><b>MY BLOG</b></h1>
            <p>Welcome to the blog of <span className="w3-tag">unknown</span></p>
            <button onClick={() => setLang('ru')}>Русский</button>
            <button onClick={() => setLang('en')}>Английский</button>
            <h2>Тема странички: {theme}</h2>
        </header>
    )
}

// export default Header; или можно перед функцией прописать export. В первом случая экспортируется тольео один компонен...