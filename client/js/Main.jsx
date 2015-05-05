var React = require('react');

var Main = React.createClass({
	render: function () {
		return (
			<main>
			    <div className="container" id="b1"></div>
			    <div className="container" id="b2"></div>
			    <div className="container" id="b3"></div>
			    <div className="container" id="b4"></div>
			    <div className="container" id="b5"></div>
			    <div className="container" id="b6"></div>
			    <div className="container" id="b7"></div>
			    <div className="container" id="b8"></div>
			    <div className="container" id="b9"></div>
			    <div className="container" id="a1"></div>
			    <div className="container" id="a2"></div>
			    <div className="container" id="a3"></div>
			    <ul className="apps">
				<li className="insights">a</li>
				<li className="subscriptions">b</li>
				<li className="huddles">c</li>
			    </ul>
			</main>	
		);
	}
});

module.exports = Main;
