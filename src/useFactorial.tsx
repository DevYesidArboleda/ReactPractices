import React, { useEffect, useState }  from 'react';


const useFactorial = (numero) => {
    console.log("entro", numero)

    const [factorial, setFactorial] = useState(0)  

    const calcularFactorial = () => {
        let resultado:number = 0;
    
        for (let i=1; i<=numero; i++){
            resultado *=i
        }
        setFactorial(resultado);
       
        
    }
      
  return (
    <div>
        {factorial}
    </div>
  )
}

export default useFactorial