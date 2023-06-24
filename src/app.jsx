import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [charXO, setCharXO] = useState(['X']);

  

  const handleSwitch = () => {
    console.log(charXO);
    if (charXO[0] === 'X') {
      setCharXO(['O']);
      return charXO;
    }
    else {
      setCharXO(['X']);
      return charXO;
    }
  };

  const autoSwitch = setInterval(handleSwitch, 5000);

  return(
    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <Box 
        prop={charXO}
        //{autoSwitch}
        handleSwitch={handleSwitch}
      />
    </div>
  );
};

const Box = (props) => { console.log('Props obj: ', props);
  return (
    <button className='square' onClick={props.handleSwitch}>{props.prop}</button>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App/>,);