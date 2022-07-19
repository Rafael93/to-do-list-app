import logo from './logo.svg';
import './App.css';
import TaskList from './componentes/task-list.js';

function App() {
  return (
    <div className="to-do-list-app">
      <div className='logo-container'>
        <img 
        src={logo}
        className="react-logo" />
      </div>
      <div className='main-list'>
        <h1>Mis tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
