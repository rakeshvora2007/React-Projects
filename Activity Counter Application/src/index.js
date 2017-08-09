import React from 'react';
import { render } from 'react-dom';
import RunningDayCount from './components/RunningDayCount';
import { RunningDayList } from './components/RunningDayList';

window.React = React

render(
	<RunningDayList days={
		[
			{
				place: "Austin",
				date: new Date("1/2/2017"),
				energyDrink: true,
				excercise: true
			},
			{
				place: "Fullerton",
				date: new Date("2/2/2017"),
				energyDrink: false,
				excercise: true
			},
			{
				place: "New York",
				date: new Date("3/2/2017"),
				energyDrink: true,
				excercise: false
			}
		]
	}
	 						/>,
	document.getElementById('react-container')
)
