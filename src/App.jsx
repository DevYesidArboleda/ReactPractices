import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dreamLogo from '/logoDreamCode.png'
//import useFactorial from './useFactorial'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [factorial, setFactorial] = useState(0)  

  const calcularFactorial = () => {
    let resultado = 1;
    
    for (let i=1; i<=count; i++){
        resultado = resultado * i
        console.log("count", i)
    }
    setFactorial(resultado);   
      console.log("factorial", resultado)
    }

    //Objetos

    const mascotas = {
      nombre:"tom",
      edad: 10,
      vivo: true,
      dueño:["yesid", 20, "aja"
      ]
    }

    const {nombre} = mascotas

    console.log(nombre)

    const paginaWeb = {
      dominio:[
        "yesid"
      ],
      url:{
        link:"www.devye.com",
        port: 8000
      },
      redesSociales:{
        youtube:{
          url:"youtube.com/devye",
          nombre: "devye"
        }
      }
    }

    console.log(paginaWeb.redesSociales.youtube.url)

    const resultadoArray = [];

    fetch ("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then( data =>{ 
      data.results.forEach(element => {        
        resultadoArray.push(element)
      });
      
    })

    console.log(resultadoArray)

    //Async await

    const obtnerPokemon = async() =>{      
      try {
        const res = await fetch ("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()
        console.log("respuesta Pokemon", data.results)
        data.results.map( poke => console.log(poke))
      }
      catch (error){
        console.log(error)
      }
    }

    obtnerPokemon()

  return (
    <>
      <div>
        <a href="https://www.dreamcodesoft.com/es/" target="_blank">
          <img src={dreamLogo} className="logo" alt="Vite logo" />
        </a>        
      </div>
      <h1>React App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar numero +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Disminuir numero -
        </button>
        <button onClick={calcularFactorial}>
          Factorial numero {factorial}
        </button>
        <br />                
      </div>
      <div className='totalNumber'>
        <h1>
            Total {count}
        </h1>
      </div>
      <p className="read-the-docs">
        Vite by Yesid Banguera
      </p>
    </>
  )
}

export default App
