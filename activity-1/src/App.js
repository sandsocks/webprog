import './App.css';
import Greeting from './Greeting';

function App() {
  return (
   <div className="ProfileCard">
  
    <Greeting name=" Name: Maxi"/>
    <Greeting Age="Age: 23" />
    <Greeting job="Occupation: Student"/>
    <Greeting color="Favorite Color: Yellow"/>

    <div className='ProfileCard2'>
    <Greeting name=" Name: John"/>
    <Greeting Age="Age: 22" />
    <Greeting job="Occupation: Painter"/>
    <Greeting color="Favorite Color: Blue"/>

    <div className='ProfileCard3'>
    <Greeting name=" Name: Marie"/>
    <Greeting Age="Age: 25" />
    <Greeting job="Occupation: Teacher"/>
    <Greeting color="Favorite Color: Green"/>
    </div>
    </div>
   </div>
  )
}

export default App;