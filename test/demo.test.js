

describe('pruebas en <DemoCOmponent />', () =>{
    test('esta prueba no debe de fallar', ()=>{

        if( 0 === 1){
            throw new Error("No se puede dividir entre cero")
        }
    
        const message1 = "hola mundo";
    
        const message2 = message1.trim();
    
        expect( message1).toBe( message2 )
        
    })
});