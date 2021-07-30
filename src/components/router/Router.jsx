import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//for use hover with help about task condition
import TaskConditions from "../task-conditions/TaskConditions";

//add components, tasks
import Card from "../card/Card";
import Text from "../task-3.1/Text";
import Square from "../task-3.2/Square";
import Checkbox from "../task-4.1/Checkbox";
import PlayerButton from "../task-4.2/PlayerButton";
import ItalicText from "../task-4.3/ItalicText";
import Loader from "../task-5.2/Loader";
import IsSignedIn from "../task-5.3/IsSignedIn";
import CycleOfComponents from "../task-6/CycleOfComponents";
import Tap from "../task-s.1/Tap";
import Counter from "../task-s.2/Counter";
import CheckList from "../task-T.1/CheckList";
import PostRequest from "../task-H.8/PostRequest";
import AddRandomName from "../task-H.9.1/AddRandomName";
import TwoSideBinding from "../task-H.9.2/TwoSideBinding";
import TimePicker from "../task-H.9.3/TimePicker";

function Routing() {

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

    return (
      <Router>
        <div>
          <nav  className = 'menu-container'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/task-3.1">Task 3.1</Link>
              </li>
              <li>
                <Link to="/task-3.2">Task 3.2</Link>
              </li>
              <li>
                <Link to="/task-4.1">Task 4.1</Link>
              </li>
              <li>
                <Link to="/task-4.2">Task 4.2</Link>
              </li>
              <li>
                <Link to="/task-4.3">Task 4.3</Link>
              </li>
              <li>
                <Link to="/task-5.2">Task 5.2</Link>
              </li>
              <li>
                <Link to="/task-5.3">Task 5.3</Link>
              </li>
              <li>
                <Link to="/task-6">Task 6</Link>
              </li>
              <li>
                <Link to="/task-S.1">Task S.1</Link>
              </li>
              <li>
                <Link to="/task-S.2">Task S.2</Link>
              </li>
              <li>
                <Link to="/task-T.1">Task T.1</Link>
              </li>
              <li>
                <Link to="/task-H.8">Task H.8</Link>
              </li>
              <li>
                <Link to="/task-H.9.1">Task H.9.1</Link>
              </li>
              <li>
                <Link to="/task-H.9.2">Task H.9.2</Link>
              </li>
              <li>
                <Link to="/task-H.9.3">Task H.9.3</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/task-3.1">
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
            </Route>
            <Route path="/task-3.2">
              {/* Start Task 3.2 */}
              <Card taskNumber = '3.2' condition = '3.2'>
                <div className="squares-container">
                  <Square label='BIG square' cssClass ='big-square'/>
                  <Square label='A less square' cssClass ='medium-square'/>
                  <Square label='The smallest one' cssClass ='small-square'/>
                </div>  
              </Card>
              {/* End Task 3.2 */}
            </Route>
            <Route path="/task-4.1">
              {/* Start Task 4.1 */}
                <Card taskNumber = '4.1' condition = '4.1'>
                  <Checkbox />
                </Card>
              {/* End Task 4.1 */}
            </Route>
            <Route path="/task-4.2">
                {/* Start Task 4.2 */}
                  <Card taskNumber = '4.2' condition = '4.2'>
                    <PlayerButton />
                  </Card>
                {/* End Task 4.2 */}
            </Route>
            <Route path='/task-4.3'>
                {/* Start Task 4.3 */}
                <Card taskNumber = '4.3' condition = '4.3'>
                  <ItalicText />
                </Card>
                {/* End Task 4.3 */}
            </Route>
            <Route path='/task-5.2'>
                {/* Start Task 5.2 */}
                <Card taskNumber = '5.2' condition = '5.2'>
                  <Loader />
                </Card>
                {/* End Task 5.2 */}
            </Route>
            <Route path='/task-5.3'>
               {/* Start Task 5.3 */}
                <Card taskNumber = '5.3' condition = '5.3'>
                  <IsSignedIn />
                </Card>
                {/* End Task 5.3 */}
            </Route>
            <Route path='/task-6'>
                {/* Start Task 6 */}
                <Card taskNumber = '6' condition = '6'>
                  <CycleOfComponents />
                </Card>
                {/* End Task 6 */}
            </Route>
            <Route path='/task-S.1'>
                {/* Start Task S.1 */}
                <Card taskNumber = 'S.1' condition = 'S.1'>
                  <div className="buttons-container">
                    <Tap clickFunction = {() => callingConsoleLog()} label = 'Кнопка с консоль логом'/>
                    <Tap clickFunction = {() => alert('Any message')} label = 'Кнопка с алертом'/>
                    <Tap clickFunction = {() => callingConsoleLog('Other message')} label = 'Кнопка с другим консоль логом'/>
                  </div>  
                </Card>
                {/* End Task S.1 */}
            </Route>
            <Route path='/task-S.2'>
                {/* Start Task S.2 */}
                <Card taskNumber = 'S.2' condition = 'S.2'>
                  <Counter counter = {count} functionPlus = {() => counterPlus()} functionMinus = {() => counterMinus()}/>
                </Card>
                {/* End Task S.2 */}
            </Route>
            <Route path='/task-T.1'>
                {/* Start Task T.1 */}
                <Card taskNumber = 'T.1' condition = 'T.1'>
                  <CheckList />
                </Card>
                {/* End Task T.1 */}
            </Route>
            <Route path='/task-H.8'>
                {/* Start Task H.8 */}
                <Card taskNumber = 'H.8' condition = 'H.8'>
                  <PostRequest />
                </Card>
                {/* End Task H.8 */}
            </Route>
            <Route path='/task-H.9.1'>
               {/* Start Task H.9.1 */}
                <Card taskNumber = 'H.9.1' condition = 'H.9.1'>
                  <AddRandomName />
                </Card>
                {/* End Task H.9.1 */}
            </Route>
            <Route path='/task-H.9.2'>
                {/* Start Task H.9.2 */}
                <Card taskNumber = 'H.9.2' condition = 'H.9.2'>
                  <TwoSideBinding />
                </Card>
                {/* End Task H.9.2 */}
            </Route>
            <Route path='/task-H.9.3'>
                {/* Start Task H.9.3 */}
                <Card taskNumber = 'H.9.3' condition = 'H.9.3'>
                  <TimePicker />
                </Card>
                {/* End Task H.9.3 */}
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>Home</h2>;
  }

export default Routing  