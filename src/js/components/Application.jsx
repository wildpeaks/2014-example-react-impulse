/** @jsx React.DOM */
var React = require('react');
var Basic = require('./Basic.jsx');
var DragBoundry = require('./DragBoundry.jsx');
var DragAnimated = require('./DragAnimated.jsx');


module.exports = React.createClass({

	render: function(){
		// jshint quotmark:false, newcap:false
		'use strict';
		return (
			<div>
				<Basic />
				<DragBoundry />
				<DragAnimated />
			</div>
		);
	}

});