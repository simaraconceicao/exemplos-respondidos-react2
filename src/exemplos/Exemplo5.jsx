// ## Exemplo 5 - Consumir api com axios e async/await
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Exemplo5 = () => {
  const [repos, setRepos] = useState([])

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
      <h1>Meus repos:</h1>
      <ul>
        {repos.map(item => 
          <li key={item.id}>
            {item.name}
          </li>
        )}
      </ul>
    </>
  )
}

export default Exemplo5