import React from 'react';
import { render } from 'react-dom';
import RunningDayCount from './components/RunningDayCount';

window.React = React

render(
	<RunningDayCount total={50}
		spent={20}
		wait={10}
		goal={100}
	 						/>,
	document.getElementById('react-container')
)
