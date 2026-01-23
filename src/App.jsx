import { useState, useRef } from 'react';
import { PrizeWheel } from '@mertercelik/react-prize-wheel';
import '@mertercelik/react-prize-wheel/style.css';

export function App() {
  const wheelRef = useRef();

  let [dinheiro, setDinheiro] = useState(1800);
  let [resultado, setResultado] = useState();
  const optionsWheel = [
    -1800, 2000, -400, -2400, 5000, -10000, -3000, 1000, -11000, 50000, 10,
    -30000, 1000000,
  ];

  const handleSpinEnd = (sector) => {
    console.log('Winner:', sector.label, sector);
  };

  return (
    <div>
      <nav className="nav-container">
        <div className="logo"></div>

        <div className="nav-tools">
          <span>Resultado: {resultado}</span>

          <div className="user-avatar">NA</div>
        </div>
      </nav>
      <div>
        <PrizeWheel
          ref={wheelRef}
          sectors={[
            { id: 1, label: 'Prize 1', value: 1, probability: 10 },
            { id: 2, label: 'Prize 2', value: 2, probability: 20 },
            { id: 3, label: 'Prize 3', value: 3, probability: 15 },
            { id: 4, label: 'Prize 4', value: 4, probability: 5 },
          ]}
          onSpinEnd={handleSpinEnd}
        />
      </div>

      <MyButton
        onClick={() => {
          console.log(wheelRef);

          wheelRef.current.spin();

          let index = Math.floor(Math.random() * 13);

          let option = optionsWheel[index];
          setResultado(option);

          setDinheiro(dinheiro + option);
        }}
      />
      <div>
        Resultado: {resultado}
        <div>{dinheiro}</div>
      </div>
    </div>
  );
}

function MyButton(props) {
  return <button onClick={props.onClick}>Rodar Roleta</button>;
}
