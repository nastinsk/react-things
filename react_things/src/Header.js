import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      greeting: props.greeting,
      count: props.count
    }
  }

  render() {
    return (
      <>
      <h1>{this.state.greeting}</h1>
      <p>You have {this.state.count} things</p>
      </>
    )
  }
}

export default Header;