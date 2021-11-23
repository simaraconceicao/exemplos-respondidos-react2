// ## Exemplo 6 - Mostrar repos vindos da api do github quando um botão for clicado

import { useState, useEffect } from 'react'
import Axios from 'axios'

const Exemplo6 = () => {
  const [repos, setRepos] = useState([])
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
  const fetchData = async () => {
    const response = await Axios.get('https://api.github.com/users/simaraconceicao/repos')
    const data = await response.data
    setRepos(data)
  }
  fetchData()
  }, [])

  return (
    <>
      <button onClick={()=> setMostrar(true)}>Mostrar repos</button>
      {mostrar && 
        <div>
          <h1>Meus repos:</h1>
          <ul>
            {repos.map(item => 
              <li key={item.id}>
                {item.name}
              </li>
            )}
          </ul>
        </div>
      }
    </>
  )
}

export default Exemplo6