import { Link } from 'react-router-dom';
import './game-modules.css'
import Perfil from '../../../perfil/perfil';
import Logo from '../../../../../img/LogoTutu.png'
import MenuBaixo from '../../../navbar/menuBaixo';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/esm/Button';
import Navbarr from '../../../navbar/navbar';



function getInitialState() {
    const state = {};
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        state[`${r}-${c}`] = null;
      }
    }
    return state;
  }
  
  const getKeyFromIndex = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    return `${row}-${col}`;
  };
  
  const getLabel = (value) => {
    if (!value) {
      return null;
    }
    return value > 0 ? 'O' : 'X';
  };
  
  function getWinner(v) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const sumRow =
          v[`${r}-${c}`] +
          v[`${r}-${c + 1}`] +
          v[`${r}-${c + 2}`];
        if (sumRow === 3 || sumRow === -3) {
          return sumRow;
        }
  
        const sumCol =
          v[`${r}-${c}`] +
          v[`${r + 1}-${c}`] +
          v[`${r + 2}-${c}`];
        if (sumCol === 3 || sumCol === -3) {
          return sumCol;
        }
  
        const sumDiagonal =
          v[`${r}-${c}`] +
          v[`${r + 1}-${c + 1}`] +
          v[`${r + 2}-${c + 2}`];
        if (sumDiagonal === 3 || sumDiagonal === -3) {
          return sumDiagonal;
        }
  
        const sumReverseDiagonal =
          v[`${r}-${c}`] +
          v[`${r + 1}-${c - 1}`] +
          v[`${r + 2}-${c - 2}`];
        if (
          sumReverseDiagonal === 3 ||
          sumReverseDiagonal === -3
        ) {
          return sumReverseDiagonal;
        }
      }
    }
  
    return null;
  }


function Game() {

      const [values, setValues] = useState(getInitialState);
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);

  function handleClick(key) {
    if (winner || values[key]) {
      return;
    }
    const newValues = {
      ...values,
      [key]: player
    };
    setValues(newValues);
    setPlayer(player * -1);
    const newWinner = getWinner(newValues);

    if (newWinner) {
      setWinner(newWinner > 0 ? 1 : -1);
    }
  }

  function reset() {
    setWinner(null);
    setValues(getInitialState);
    setPlayer(1);
    localStorage.setItem('ponto2', 10)

  }

  const itsATie =
    Object.values(values).filter(Boolean).length === 9 &&
    !winner;



    return (
        <div className="tarefas">
     <Navbarr />

          

            <Perfil />


            <div className="Game">
                <b>JOGO DA VELHA - JOGUE COM AMIGO</b>
      <div className="Game__board">
        {Array.from({ length: 9 }).map((_, index) => {
          const key = getKeyFromIndex(index);
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(key)}
            >
              {getLabel(values[key])}
            </button>
          );
        })}
      </div>
      {(winner || itsATie) && (
        <div className="Game__menu">
          {winner ? (
            <p>O ganhador é: {winner > 0 ? 'O' : 'X'}</p>
          ) : (
            <p>Houve um empate</p>
          )}
          <Button className='restart' onClick={reset} variant="warning"> <b>Reiniciar</b></Button>{' '}

        </div>
      )}
    </div>

            

            


        </div>
    );
}

export default Game;
