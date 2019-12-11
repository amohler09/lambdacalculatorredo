import React, {useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Operators from './components/ButtonComponents/OperatorButtons/Operators';




function App() {
  const [numDisplay, setDisplay] = useState(0);
    

  return (
    <div className="container">
      <Logo />
      <Display numbers={numDisplay}/>
      <div className="App">
        <div className='left'>
          <Specials />
          <Numbers setDisplay={setDisplay}/>
        </div>
        <div className='right'>
        <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
