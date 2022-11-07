import { useState } from 'react';
import './formulario.css'

function EventosReact(){
    const [buscar, setSearch] = useState("");

    return(
        <div className='card'>
        <h2>Formulario React - Desafío 02</h2>
        {/* <button onClick={function(){
            console.log('Hola desde un Evento');
        }}>Haga click nenita</button> */}
        <form>
            <input type="text" name='search' 
            onChange={e=>setSearch(e.target.value)} placeholder="Escribir">
            </input> 
            <button>Enviar</button>
            <h2>{buscar}</h2>
        </form>
        </div>
        
    );
}

export default EventosReact;