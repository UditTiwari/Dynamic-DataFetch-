import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialFollow from './components/SocialFollow'
import Grocery  from './components/Grocery'
import Clothes from './components/Clothes'
import Main from './components/Main'




function App() {
  return (
    <div className="App">


<Main />
<Grocery />
<Clothes />

<SocialFollow/>

    </div>
   
  );


}

export default App;
