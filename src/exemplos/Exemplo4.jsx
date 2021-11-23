// ## Exemplo 4 - revisar useEffect que executa toda vez que uma variável 
    // muda + executa o retorno de uma função quando o componente 
    //for destruido ou sumirimport { useState, useEffect } from 'react'
import { useState, useEffect } from 'react'

const Exemplo3 = () => {
  const [contador, setContador] = useState(0)
  
  useEffect(() =>{
    document.title = contador

    return () => document.title = 'Meu App'
  }, [contador])
  
  return(
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
    </>
  )
}

export default Exemplo3



export function App() {
  // const [mostrar, setMostrar]= useState(true)

  setTimeout(() => {
    // setMostrar(false)
  }, 5000)

  return (
    <>
     {/* {mostrar && <Exemplo4 />} */}
    </>
  )
}

