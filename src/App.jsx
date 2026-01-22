import { useState } from "react"

export function App() {
  let [dinheiro, setDinheiro] = useState(1800)
  let [resultado, setResultado] = useState()
  const optionsWheel = [-1800, 2000, -400, -2400, 5000, -10000, -3000, 1000, -11000, 50000, 10, -30000, 1000000]

  return (
    <div>
      <nav className="nav-container">
        <div className="logo"></div>

        <div className="nav-tools">
          <span>Resultado: {resultado}</span>

          <div className="user-avatar">
            NA
          </div>
        </div>
      </nav>

      <MyButton onClick={() => {
        let index =  (Math.floor(Math.random() * 13))

        let option = optionsWheel[index]
        setResultado(option)

        setDinheiro(dinheiro + option)

      }} />
      <div>
        Resultado: {resultado}
        <div>
          {dinheiro}
        </div>
      </div>
    </div>
  )
}

function MyButton(props) {
  return <button onClick={props.onClick}>Rodar Roleta</button>
  
}