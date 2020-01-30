import React from 'react';

class ThingItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.props.onSubmit;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('A thing was added: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add thing:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default ThingItem;

