import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ThingList from './ThingList';
import ThingItem from './ThingItem';
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
  }

  submitHandler(event) {
    alert('A thing was added:  ' );
    console.log(event.target.value)
    event.preventDefault();
  }
  
 

  render() {
    return (
      <div className="App">
      <Header greeting = "welcome" count = {this.state.thingsList.length}/>
      <ThingList thingsList={this.state.thingsList}/>
      <ThingItem onSubmit={this.submitHandler} />
      <Footer />
      </div>
    )
  }
 }
  

export default App;
