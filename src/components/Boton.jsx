import '../stylesSheet/Boton.css'


export const Boton = ( { texto, esBotonDeClick, handlerClick } ) => {


  return (

   <button
   className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
   onClick={ handlerClick }
   >
    { texto }
   </button>
  )
}
