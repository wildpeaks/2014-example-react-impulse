/** @jsx React.DOM */
var React = require('react');
var impulse = require('impulse');


module.exports = React.createClass({

	getInitialState: function(){
		'use strict';
		return {
			translate: false,
			scale: false
		};
	},

	componentDidMount: function(){
		'use strict';
		var node = this.refs.ball.getDOMNode();
		var translate = impulse(node).style('translate', function(x, y){
			return x + 'px, ' + y + 'px';
		});
		var scale = impulse(node).style('scale', function(s){
			return s;
		});
		this.setState({
			translate: translate,
			scale: scale
		});
	},

	componentWillUnmount: function(){
		'use strict';
		this.setState({
			translate: false,
			scale: false
		});
	},


	_onScale: function(){
		'use strict';
		this.state.scale
		.spring({
			tension: 200,
			damping: 10
		})
		.from(0.6)
		.to(1)
		.start();
	},

	_onSpring: function(){
		'use strict';
		this.state.translate
		.spring({
			tension: 100,
			damping: 10
		})
		.from(0, 0)
		.to(100, 100)
		.start();
	},

	_onGravity: function(){
		'use strict';
		this.state.translate
		.accelerate({
			bounce: true,
			acceleration: 1000,
			damping: 0.4,
			minBounceDistance: 5
		})
		.velocity(0, 0)
		.from(0, 0)
		.to(0, 150)
		.start();
	},

	_onDecelerate: function(){
		'use strict';
		this.state.translate
		.decelerate({
			deceleration: 500
		})
		.velocity(300, 300)
		.from(0, 0)
		.to(1000, 1000)
		.start();
	},

	_onChain: function(){
		'use strict';
		this.state.translate
		.accelerate({
			acceleration: 1000
		})
		.velocity(0, 0)
		.from(0, 0)
		.to(0, 100)
		.start()
		.then(
			this.state.translate.spring({
				tension: 100, damping: 5
			})
			.start
		);
	},


	render: function(){
		// jshint quotmark:false, newcap:false
		'use strict';
		return (
			<fieldset>
				<legend>
					Basics &nbsp;
					<button onClick={this._onScale}>Scale</button>
					|
					<button onClick={this._onSpring}>Spring</button>
					<button onClick={this._onGravity}>Gravity</button>
					<button onClick={this._onDecelerate}>Decelerate</button>
					<button onClick={this._onChain}>Chain</button>
				</legend>
				<div className="ball" ref="ball"></div>
			</fieldset>
		);
	}

});