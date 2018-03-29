var React = require('react');
var ReactDOM = require('react-dom');

import Game from './components/Game'

var App = React.createClass({
  render: function() {
    return (
      <Game />
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
