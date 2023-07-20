import './App.css';

import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <div>
       <Banner title= "Sextant"/>
      </div>
        
      <div className = "exhibits">
      <Exhibit name ="I am an Exhibit" >Hello</Exhibit>
      <Exhibit name ="I am an Exhibit">I am an Exhibit</Exhibit>
      <Exhibit name ="I am an Exhibit">I am an Exhibit yes</Exhibit>
      <Exhibit name ="I am an Exhibit">I am an Exhibit too</Exhibit>
      <Exhibit name ="I am an Exhibit">Hello</Exhibit>
      </div>
    
    </div>
  );
}

export default App;
