/** @jsx React.DOM */
var React = require('react');
var impulse = require('impulse');


module.exports = React.createClass({

	getInitialState: function(){
		'use strict';
		return {
			translate: false
		};
	},

	componentDidMount: function(){
		'use strict';
		var node = this.refs.ball.getDOMNode();
		var translate = impulse(node).style('translate', function(x, y){
			return x + 'px, ' + y + 'px';
		});
		translate.drag({
			boundry: impulse.Boundry({
				top: 0,
				left: 0,
				bottom: 150,
				right: 150
			})
		});
		this.setState({
			translate: translate
		});
	},

	componentWillUnmount: function(){
		'use strict';
		this.setState({
			translate: false
		});
	},


	render: function(){
		// jshint quotmark:false, newcap:false
		'use strict';
		return (
			<fieldset>
				<legend>
					Draggable within 150x150 square
				</legend>
				<div className="ball draggable" ref="ball"></div>
			</fieldset>
		);
	}

});