import React, {Component} from 'react';
import Logo from './components/Logo'
import Cards from './components/Cards'
import Rowtwo from './components/Rowtwo'
// import Cardbar from './components/Cardbar';

class App extends  Component{
  render(){
    return (
      <div>
        <Logo/>
        <Cards/>
        <Rowtwo/>
        {/* <Cardbar/> */}
        
        
        
      </div>
    )
  }
}

export default App;
