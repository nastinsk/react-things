import React from 'react';

class ThingList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      thingsList: props.thingsList
    }
  }

  render() {
    return (
     <ul>
       {this.state.thingsList.map(thing => <li key={thing.name}> {thing.name}</li>)}
     </ul>
    )
  }
}

export default ThingList;