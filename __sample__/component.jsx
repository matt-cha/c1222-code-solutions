import React from 'react';

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: 'value'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event.target);
  }

  render() {
    return (
      <>
        <h1 onClick={this.handleClick}>{this.state.example}</h1>
        <h2>{this.props.someProp}</h2>
      </>
    );
  }
}
