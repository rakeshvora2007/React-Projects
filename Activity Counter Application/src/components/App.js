import { Component } from 'react';
import RunningDayCount from './RunningDayCount';
import { RunningDayList } from './RunningDayList';
import { AddDayForm } from './AddDayForm';
import { Menu } from './Menu';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allRunningDays: [
  			{
  				place: "Austin",
  				date: "1/2/2017",
  				energyDrink: true,
  				excercise: true
  			},
  			{
  				place: "Fullerton",
  				date: "2/2/2017",
  				energyDrink: false,
  				excercise: true
  			},
  			{
  				place: "New York",
  				date: "3/2/2017",
  				energyDrink: true,
  				excercise: false
  			},
        {
  				place: "Washington",
  				date: "4/2/2017",
  				energyDrink: false,
  				excercise: false
  			}
  		]
    }
    this.addDay = this.addDay.bind(this);
  }

  addDay(newDay) {
		this.setState({
			allRunningDays: [
				...this.state.allRunningDays,
				newDay
			]
		})
	}

  countDays(filter) {
    return this.state.allRunningDays.filter(
      (day) => (filter) ? day[filter] : day).length
  }


  render(){
    return (
        <div className="app">
          <Menu />
            {(this.props.location.pathname === "/") ? <RunningDayCount total={this.countDays()}
              spent={this.countDays("energyDrink")}
              wait={this.countDays("excercise")}/> :
            (this.props.location.pathname === "/add-day") ? <AddDayForm onNewDay={this.addDay}/> : <RunningDayList days={this.state.allRunningDays} filter={this.props.match.params.filter} /> }
        </div>
    )
  }

}
