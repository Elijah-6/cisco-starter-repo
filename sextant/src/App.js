import './App.css';

import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPDisplay from './components/IPDisplay';



//=> '82.142.31.236'

function App() {


  return (
    <div className="App">
      <div>
       <Banner title= "Sextant"/>
      </div>
        
      <div className = "exhibits">
      <Exhibit name ="I am an Exhibit" >Hello</Exhibit>
      <Exhibit name ="I am an Exhibit">Yeah</Exhibit>
      <Exhibit name ="I am an Exhibit">I am an Exhibit yes</Exhibit>
      <Exhibit name ="I am an Exhibit">I am an Exhibit too</Exhibit>
      <Exhibit name ="I am an Exhibit"><IPDisplay/></Exhibit>
      </div>
      

    </div>
  );
}

export default App;
