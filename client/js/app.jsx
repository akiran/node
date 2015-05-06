var React = require('react');
var Main = require('./Main');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Main />
      </div>
    );
  }
});

React.render(<App />, document.body);