import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [charXO, setCharXO] = useState([['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-']]);
  // const [charXO2, setCharXO] = useState([['-'], ['-'], ['-']]);
  // const [charXO2, setCharXO] = useState([['-'], ['-'], ['-']]);

  // const boxes = [];
  // for (let i = 0; i < charXO.length; i++) {
  //   boxes.push(<Box
  //                 prop={charXO[i]}
  //                 handleSwitch={handleSwitch}
  //              />)          
  // }

  const handleSwitch = (char, place) => {
    const newChar = charXO.map((arr, idx) => {
      // place: '2-1'
      if (idx === Number(place[0]) * 3 + Number(place[2])) {
        if (char[0] === 'X' || char[0] === '-') {
          return ['O'];
        }
        else {
          return ['X'];
        }
      }
      else {
        return arr;
      }

    });

    // if (char[0] === 'X' || char[0] === '-') {
    //   setCharXO([['O']['-']['-']]);
    // }
    // else {
    //   setCharXO(['X']);
    // }

    setCharXO(newChar);
  };

  // const autoSwitch = setInterval(handleSwitch, 3000);
  const replay = () => {
    setCharXO([['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-'], ['-']])
  }

  return (
    <div className='container'>
      <h1>Tic Tac Toe</h1>
      <Board
        prop={charXO} // = [['-'], ['-'], ['-']]
        handleSwitch={handleSwitch}
      />
      <br />
      <button id="replay" onClick={replay}>replay</button>
    </div>
  );
};

const Board = (props) => {
  const rows = [];
  let row;
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      row = props.prop.slice(0, 3);
    } else if (i === 1) {
      row = props.prop.slice(3, 6);
    } else {
      row = props.prop.slice(6)
    }

    rows.push(<Row
      prop={row} // = ['-']
      handleSwitch={props.handleSwitch}
      place={i}
    />);
  }
  return (
    <div>
      {rows}
    </div>
  );
};

// Child component called Row
const Row = (props) => {
  const boxes = [];
  for (let i = 0; i < props.prop.length; i++) {
    boxes.push(<Box
      prop={props.prop[i]} // = ['-']
      handleSwitch={props.handleSwitch}
      place={`${props.place}-${i}`}
    />);
  }
  return (
    <div>
      {boxes}
    </div>
  );
};

const Box = (props) => {
  console.log('Props obj: ', props);
  return (
    <button className='square' onClick={() => props.handleSwitch(props.prop, props.place)}>{props.prop}</button>
  );
};

const root = createRoot(document.querySelector('#root'));
root.render(<App />,);