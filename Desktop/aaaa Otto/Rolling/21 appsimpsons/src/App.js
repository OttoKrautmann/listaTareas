import React from 'react';
import Boton from './components/Boton';
import Frase from './components/Frase';
import theSimpsons from './img/theSimpsons.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/App.css'

const App = () => {
    return (
        <div className="bg-principal">

        <div className='container text-center'>
            <img src={theSimpsons} alt="logo de los simpsons" className='w-50 py-5' />
            <Boton></Boton>
            <Frase></Frase>
        </div>
        </div>
    );
};

export default App;