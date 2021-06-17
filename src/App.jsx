import './styles/css/App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Text from './components/task-3.1/Text';
import Square from './components/task-3.2/Square';
import Checkbox from './components/task-4.1/Checkbox';
import PlayerButton from './components/task-4.2/PlayerButton';
import ItalicText from './components/task-4.3/ItalicText';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Start Task 3.1 */}
      <Card taskNumber = '3.1' condition = 'this feature is in development'>
        <Text text = 'Regular text' textColor = 'black' textSize = '25' textDecoration = {false}/>
        <Text text = 'Huge header' textColor = 'black' textSize = '40' textDecoration = {false}/>
        <Text text = 'Danger notification' textColor = 'red' textSize = '25' textDecoration = {false}/>
        <Text text = 'Underline text' textColor = 'black' textSize = '30' textDecoration = {true}/>
      </Card>
      {/* End Task 3.1 */}
      {/* Start Task 3.2 */}
      <Card taskNumber = '3.2' condition = 'this feature is in development'>
        <div className="squares-container">
          <Square label='BIG square' cssClass ='big-square'/>
          <Square label='A less square' cssClass ='medium-square'/>
          <Square label='The smallest one' cssClass ='small-square'/>
          </div>  
      </Card>
      {/* End Task 3.2 */}
      {/* Start Task 4.1 */}
      <Card taskNumber = '4.1' condition = 'this feature is in development'>
        <Checkbox />
      </Card>
      {/* End Task 4.1 */}
      {/* Start Task 4.2 */}
      <Card taskNumber = '4.2' condition = 'this feature is in development'>
        <PlayerButton />
      </Card>
      {/* End Task 4.2 */}
      {/* Start Task 4.3 */}
      <Card taskNumber = '4.3' condition = 'this feature is in development'>
        <ItalicText />
      </Card>
      {/* End Task 4.3 */}
    </div>
  );
}

export default App;
