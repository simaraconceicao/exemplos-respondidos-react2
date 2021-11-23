# Revisao aula 2

## Exemplo 1 - revisar useState e onClick

Criar um contador que incrementa +1 quando o botao é clicado

```
const [contador, setContador] = useState(0)

return(
  <h1>{contador}</h1>
  <button 
    onClick={() => setContador(contador + 1)}
  >
    Somar
  </button>
)

```
## Exemplo 2 - revisar useEffect que só executa uma vez quando a página é carregada

```
document.title = 'qualquer string'
```

## Exemplo 3 - revisar useEffect que executa toda vez que uma variável muda

```
document.title = contador
```

## Exemplo 4 - revisar useEffect que executa toda vez que uma variável muda + executa o retorno de uma função quando o componente for destruido ou sumir

```
return () => document.title = 'Meu App'
```

E no App.js - fazer o componente sumir em 5 segundos

```
const [mostrar, setMostrar] = useState(true)

setTimeout(() => {
  setMostrar(false)
}, 5000)

return(
  {mostrar && <MeuContador />}
)
```

## Exemplo 5 - Consumir api com axios e async/await

```
import Axios from 'axios'

const [repos, setRepos] = useState([])

useEffect(()=> {
  const fetchData = async () =>{
    const response = await Axios.get('https://api.github.com/users/simaraconceicao/repos')
    const dados = await response.data //ja vem com dados em json
    setRepos(dados)
  }
  fetchData()
}, [])

return(
  <>
    <ul>
      {repos.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  </>
)

```

## Exemplo 6 - Mostrar repos vindos da api do github quando um botão for clicado
```
const [repos, setRepos] = useState([])
const [mostrar, setMostrar] = useState(false)

  useEffect(()=> {
    const fetchData = async () =>{
      const response = await Axios.get('https://api.github.com/users/simaraconceicao/repos')
      const dados = await response.data //ja vem com dados em json
      setRepos(dados)
    }
    fetchData()
  }, [])

  return (
    <div>
      <button onClick={() => {setMostrar(true)}}>Ver repositórios</button>
      { mostrar &&
        <ul>
          {repos.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      }
    </div>
  )

```

## Exemplo 7 - Mostrar repos forkados com filtro
```
const [mostrarFork, setMostrarFork] = useState(false)


<div>
  <button onClick={() => {setMostrarFork(true)}}>Ver repositórios forkados</button>
  { mostrarFork &&
    <div>
      <h1>repos com fork:</h1>
      <ul>
      {filterFork.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>  
  }
</div>

```

## Exemplo 8 - Terminar projetos de rotas

10) insere conteúdo nas páginas importando
11) estiliza as páginas
12) se der tempo criamos redirect, subimos no github e netlify
