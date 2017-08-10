import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss'
import './stylesheets/index.scss'
import RunningDayCount from './components/RunningDayCount';
import App from './components/App';
import { Whoops } from './components/Whoops';
import { BrowserRouter as Router, Route } from 'react-router-dom';

window.React = React

render(
	<Router>
	<div>
		<div>
		<Route path="/" component={App}/>
		<Route path="list-days" component={App}/>
		<Route path="/list-days/:filter" component={App}/>
		<Route path="add-day" component={App}/>
		</div>
		<div>
		<Route path="/404" component={Whoops}/>
		</div>
	</div>
	</Router>,
	document.getElementById('react-container')
)
