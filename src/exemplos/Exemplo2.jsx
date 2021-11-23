// ## Exemplo 2 - revisar useEffect que só executa uma vez quando a página é carregada
import { useState, useEffect } from 'react'

const Exemplo2 = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    document.title = 'Exemplo2'
  }, [])

  return(
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
    </>
  )
}

export default Exemplo2