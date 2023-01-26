import { useState } from 'react';

import './App.css';
import { Boton } from './components/Boton';
import { Contador } from './components/Contador';



export const App = (  ) => {

      const [contador, setContador] = useState(0);

      const clickSuma = () => {

             setContador( contador + 1 );
      };

      const clickResta = () => {
             if ( contador === 0 ) return;
             setContador( contador - 1 );
      };

      const reset = () => {

            setContador( 0 );
      };


  return (
    <div className="App">
  
          <div className='logo-contenedor'>
        
         
          
              <div className='container-main'>

                  <Contador
                    numeroClicks={ contador }

                    />

                  <Boton
                      texto='Click +1'
                      esBotonDeClick={true}
                      handlerClick={ clickSuma }
                    />
                  <Boton
                      texto='Click -1'
                      esBotonDeClick={true}
                      handlerClick={ clickResta }
                    
                    />
                  <Boton
                      texto='Reiniciar'
                      esBotonDeClick={false}
                      handlerClick={ reset }
                    
                    />

              </div>


          </div>


    </div>
  );
}


