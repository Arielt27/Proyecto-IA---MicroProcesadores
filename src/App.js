import './App.css';
import AppSpoti from './Componentes/AppSpoti';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        
        <h1 className='title1'>
          Proyecto MicroProcesadores
        </h1>

        <div>
          <AppSpoti />
        </div>                                  
      </div>
    </div>
  );
}

export default App;