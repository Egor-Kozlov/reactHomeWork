//for use hooks
import React, { useState } from 'react'

//for use hover with help about task condition
import TaskConditions from './components/task-conditions/TaskConditions';

//add general style file
import './styles/css/App.css';

//add components, tasks
import Header from './components/header/Header';
import Card from './components/card/Card';
import Text from './components/task-3.1/Text';
import Square from './components/task-3.2/Square';
import Checkbox from './components/task-4.1/Checkbox';
import PlayerButton from './components/task-4.2/PlayerButton';
import ItalicText from './components/task-4.3/ItalicText';
import Loader from './components/task-5.2/Loader';
import IsSignedIn from './components/task-5.3/IsSignedIn';
import CycleOfComponents from './components/task-6/CycleOfComponents';
import Tap from './components/task-s.1/Tap';
import Counter from './components/task-s.2/Counter';
import CheckList from './components/task-T.1/CheckList';
// import { from } from 'pumpify';

function App() {

  //function for task-s.1
  function callingConsoleLog (massage = 'Default message') {
    console.log(massage);
  }

  //hooks and functions for task-s.2
  const [count, setCount] = useState(0)
  
  function counterPlus() {
      setCount(count + 1)
  }

  function counterMinus() {
     setCount(count - 1) 
  }

  //hooks and functions for task-T.1

  return (
    <div className="App">
      <TaskConditions />
      <Header />
      {/* Start Task 3.1 */}
      <Card taskNumber = '3.1' condition = '3.1'>
        <div className="text-container">
          <Text text = 'Regular text' textColor = 'black' textSize = '25' textDecoration = {false}/>
          <Text text = 'Huge header' textColor = 'black' textSize = '40' textDecoration = {false}/>
          <Text text = 'Danger notification' textColor = 'red' textSize = '25' textDecoration = {false}/>
          <Text text = 'Underline text' textColor = 'black' textSize = '30' textDecoration = {true}/>
        </div>
      </Card>
      {/* End Task 3.1 */}
      {/* Start Task 3.2 */}
      <Card taskNumber = '3.2' condition = '3.2'>
        <div className="squares-container">
          <Square label='BIG square' cssClass ='big-square'/>
          <Square label='A less square' cssClass ='medium-square'/>
          <Square label='The smallest one' cssClass ='small-square'/>
        </div>  
      </Card>
      {/* End Task 3.2 */}
      {/* Start Task 4.1 */}
      <Card taskNumber = '4.1' condition = '4.1'>
        <Checkbox />
      </Card>
      {/* End Task 4.1 */}
      {/* Start Task 4.2 */}
      <Card taskNumber = '4.2' condition = '4.2'>
        <PlayerButton />
      </Card>
      {/* End Task 4.2 */}
      {/* Start Task 4.3 */}
      <Card taskNumber = '4.3' condition = '4.3'>
        <ItalicText />
      </Card>
      {/* End Task 4.3 */}
      {/* Start Task 5.2 */}
      <Card taskNumber = '5.2' condition = '5.2'>
        <Loader />
      </Card>
      {/* End Task 5.2 */}
      {/* Start Task 5.3 */}
      <Card taskNumber = '5.3' condition = '5.3'>
        <IsSignedIn />
      </Card>
      {/* End Task 5.3 */}
      {/* Start Task 6 */}
      <Card taskNumber = '6' condition = '6'>
        <CycleOfComponents />
      </Card>
      {/* End Task 6 */}
      {/* Start Task S.1 */}
      <Card taskNumber = 'S.1' condition = 'S.1'>
        <div className="buttons-container">
          <Tap clickFunction = {() => callingConsoleLog()} label = 'Кнопка с консоль логом'/>
          <Tap clickFunction = {() => alert('Any message')} label = 'Кнопка с алертом'/>
          <Tap clickFunction = {() => callingConsoleLog('Other message')} label = 'Кнопка с другим консоль логом'/>
        </div>  
      </Card>
      {/* End Task S.1 */}
      {/* Start Task S.2 */}
      <Card taskNumber = 'S.2' condition = 'S.2'>
        <Counter counter = {count} functionPlus = {() => counterPlus()} functionMinus = {() => counterMinus()}/>
      </Card>
      {/* End Task S.2 */}
      {/* Start Task T.1 */}
      <Card taskNumber = 'T.1' condition = 'T.1'>
        <CheckList />
      </Card>
      {/* End Task T.1 */}
    </div>
  );
}

export default App;