import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
const App = () => {
  const [charXO, setCharXO] = useState('X');

  const handleSwitch = () => {
    setInterval(function() {
      if (charXO === 'X') {
        return setCharXO('O');
      }
      else {
        return setCharXO('X');
      }
    }, 300);
  };

  return(

    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <Box 
        handleSwitch={handleSwitch}
      />
    </div>
  );
};

const Box = (props) => {
  return (
    <button className='square' onClick={props.handleSwitch}>{props.handleSwitch}</button>
  );
};
const root = createRoot(document.querySelector('#root'));
root.render(<App/>,);