import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LangContext from "./context/LangContext"
import ThemeContext from './context/ThemeContext';

const Main = () => {
  const [lang,setLang] = useState('ru');

  return (
  <ThemeContext.Provider value="light">
    <LangContext.Provider value={{lang,setLang}}>
      <App/>
    </LangContext.Provider> 
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
    <Main />,
  document.getElementById('root')
);