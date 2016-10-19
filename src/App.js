const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  getInitialState () => {
    console.log('getInitialState');
    return {
      textToDisplay: 'Hello World!'
    }
  },

  componentDidMount () => {
    console.log('componentDidMount');

    // const that = this;
    setTimeout(() => {
      this.setState({
        textToDisplay: 'Hello Donovan.'
      });
    }, 2000)


  },

  _handleClick () => {
    this.setState({
      textToDisplay: 'Hey there'
    })
  },

  _handleChange (e) => {
    this.setState({
      textToDisplay: e.target.value
    });
  },

  render () => {
    console.log('render');
    return (
      <div className="name" onClick={this._handleClick}>
      <input onChange={this._handleChange} type="text" value={this.state.textToDisplay}> </input>
      {this.state.textToDisplay}</div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('my-app'));

console.log('Hello World!');
