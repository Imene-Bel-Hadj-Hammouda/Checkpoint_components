
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
	import React from "react";
	import ReactDOM from "react-dom";
 //import App from "./App";
  import FullName from "./Component/Profile/FullName";
  import Address from "./Component/Profile/Address";
  import ProfilPhoto from "./Component/Profile/ProfilPhoto";

   
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <>
      <FullName />
      </>
      <>
      <Address/>
      </>
      <>
      <ProfilPhoto/>
        </>
      
      </header>
    </div>
  );
}

export default App;
