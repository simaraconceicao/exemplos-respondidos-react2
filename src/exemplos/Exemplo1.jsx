// ## Exemplo 1 - revisar useState e onClick
// Criar um contador que incrementa +1 quando o botao é clicado

import { useState } from 'react'

const Exemplo1 = () => {
  const [contador, setContador] = useState(0)
  return(
    <>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
    </>
  )
}

export default Exemplo1