var React = require('react');

var Header = React.createClass({
	render: function () {
		return (
			<header>
			    <nav className="nav-background">
				<div className="logo">
				    <img alt="logo" src="/images/logo.png"/>
				    <ul> 
					<li>Subscriptions</li>
					<li>Huddles</li>
					<li>Connections</li>
					<li>Academy</li>
					<li>Labs</li>
				    </ul>
				</div>
				    <div id="bookmarks"></div>
				    <div id="search"></div>
			    </nav>
			</header>
		);
	}
});

module.exports = Header;
