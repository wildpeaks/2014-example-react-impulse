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

		var x = 200;
		var y = 100;
		translate.position(x, y);
		translate.drag().on('end', function(){
			translate.spring({
				tension: 50,
				damping: 5
			})
			.to(x, y)
			.start();
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
					Drag and release to spring back
				</legend>
				<div className="ball draggable" ref="ball"></div>
			</fieldset>
		);
	}

});