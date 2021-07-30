//for use hooks
import React from 'react'

//for use hover with help about task condition
import TaskConditions from './components/task-conditions/TaskConditions';

//add general style file
import './styles/css/App.css';

//add components, tasks
import BrowserRouter from './components/router/Router';

import Header from './components/header/Header';

function App() {

  return (
    <div className="App">
      <TaskConditions />
      <Header />
      {/* Start Router */}
        <BrowserRouter />
      {/* End Router */}
    </div>
  );
}

export default App;