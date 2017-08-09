import React from 'react';
import { render } from 'react-dom';
import RunningDayCount from './components/RunningDayCount';

window.React = React

render(
	<RunningDayCount />,
	document.getElementById('react-container')
)
