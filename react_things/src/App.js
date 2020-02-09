import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ThingList from './components/ThingList';

import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thingsList: [{name:'a'},
                   {name:'b'},
                   {name:'c'}]
    }
    this.createThingHandler = this.createThingHandler.bind(this);
    this.deleteThingHandler = this.deleteThingHandler.bind(this);
  }

  
 createThingHandler(thing){
    this.setState({
     thingsList: this.state.thingsList.concat(thing)
   })
 }

 deleteThingHandler(thingToDelete){
 
    let newThingsLst = this.state.thingsList.filter(thing => thing.name !== thingToDelete.name)
    
    this.setState({
      thingsList: newThingsLst
    })
  }

  render() {
    return (
      <div className="App">
      <Header greeting = "welcome" count = {this.state.thingsList.length}/>
      <ThingList thingsList={this.state.thingsList} onCreated={this.createThingHandler} onDelete={this.deleteThingHandler}/>
      <Footer />
      </div>
    )
  }
 }
  

export default App;
