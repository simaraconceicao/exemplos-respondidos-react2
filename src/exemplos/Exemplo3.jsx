// ## Exemplo 3 - revisar useEffect que executa toda vez que uma variável muda
import { useState, useEffect } from 'react'

const Exemplo3 = () => {
  const [contador, setContador] = useState(0)
  
  useEffect(() =>{
    document.title = contador
  }, [contador])
  
  return(
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
    </>
  )
}

export default Exemplo3