// ## Exemplo 7 - Mostrar repos forkados com filtro

import { useState, useEffect } from 'react'
import Axios from 'axios'

const Exemplo6 = () => {
  const [repos, setRepos] = useState([])
  const [mostrarAll, setMostrarAll] = useState(false)
  const [mostrarFork, setMostrarFork] = useState(false)
  const [filtroFork, setFiltroFork] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    const response = await Axios.get('https://api.github.com/users/simaraconceicao/repos')
    const data = await response.data
    setRepos(data)
  }
  fetchData()
  }, [])

  useEffect(() => {
    setFiltroFork(
      repos.filter(item => item.fork === true)
    )
  }, [repos])

  return (
    <>
      <div>
        <button onClick={()=> setMostrarAll(true)}>Mostrar repos</button>
        {mostrarAll && 
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
      </div>
      <div>
        <button onClick={()=> setMostrarFork(true)}>Mostrar repos forkados</button>
        {mostrarFork && 
          <div>
            <h1>Meus repos forkados:</h1>
            <ul>
              {filtroFork.map(item => 
                <li key={item.id}>
                  {item.name}
                </li>
              )}
            </ul>
          </div>
        }
      </div>
    </>
  )
}

export default Exemplo6