var React = require('react');
var Application = require('./components/Application.jsx');

React.renderComponent(
	new Application({}),
	document.getElementById('application')
);