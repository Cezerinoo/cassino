import { useState, useRef } from 'react';
import { PrizeWheel } from '@mertercelik/react-prize-wheel';
import '@mertercelik/react-prize-wheel/style.css';
import { HorseIcon, ListIcon } from '@phosphor-icons/react';

export function App() {
  const wheelRef = useRef();

  let [dinheiro, setDinheiro] = useState(1800);
  let [resultado, setResultado] = useState();

  const sectors=[
    { id: 1, label: 'Perca R$1800', value: -1_800, probability: 10 },
    { id: 2, label: 'Ganhe R$2000', value: 2000, probability: 20 },
    { id: 3, label: 'Perca R$400', value: -400, probability: 15 },
    { id: 4, label: 'Ganhe R$5000', value: 5_000, probability: 5 },
    { id: 5, label: 'Perca R$10000', value: -100_000, probability: 5 },
    { id: 6, label: 'Ganhe R$1000', value: 100, probability: 5 },
    { id: 7, label: 'Ganhe R$3000', value: -3000, probability: 5 },
    { id: 8, label: 'Perca R$11000', value: -11_000, probability: 5 },
    { id: 9, label: 'Ganhe R$50000', value: 50_000, probability: 5 },
    { id: 10, label: 'Perca R$11000', value: -11_000, probability: 5 },
    { id: 11, label: 'Ganhe R$10', value: 10, probability: 5 },
    { id: 12, label: 'Perca R$30000', value: -30_000, probability: 5 },
    { id: 13, label: 'Ganhe R$10', value: -1_000_000, probability: 100 },
    { id: 14, label: 'Ganhe R$1,00', value: -100, probability: 5 },

  ];

  return (
    <div>
      <nav className="nav-container">

        <div className="hamb-container">
          <ListIcon size="2rem" />

          <img src="/logo.png" alt="" />
        </div>

        <div className="nav-tools">
          <span>Dinheiro: {dinheiro}</span>
          <div className="user-avatar">NA</div>
        </div>
      </nav>
      <div>
        <PrizeWheel
          ref={wheelRef}
          sectors={sectors}
          onSpinEnd={(sector) => {
            console.log('Winner:', sector.label, sector);

            const winner = sector.value
            setResultado(sector.label);
            setDinheiro(dinheiro + winner);
          }}
          wheelColors={sectors.map((sector) => {
            if (sector.id % 2 === 0) {
              return '#131e25'
            } else {
              return '#000'
            }
          })}

          duration={1}

          frameColor='#eb0000'

          middleColor='#eb0000'

          borderColor='#9e0707'

          sticksColor='#000'

          winIndicatorColor='#f5ab0c'

          winIndicatorDotColor='#000'

          middleDotColor='#000'
        />
      </div>

      <MyButton
        onClick={() => {
          wheelRef.current.spin();
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
