import { PropTypes, Component } from 'react'

const tahoeplaces = [
	"Alpine Meadows",
	"Boreal",
	"Diamond Peak",
	"Donner Ski Ranch",
	"Heavenly",
	"Homewood",
	"Kirkwood",
	"Mt. Rose",
	"Northstar",
	"Squaw Valley",
	"Sugar Bowl"
]

class Autocomplete extends Component {

	get value() {
		return this.refs.inputplace.value
	}

	set value(inputValue) {
		this.refs.inputplace.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputplace"
					   type="text"
					   list="tahoe-places" />
				<datalist id="tahoe-places">
					{this.props.options.map(
						(opt, i) =>
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



export const AddDayForm = ({ place,
							 date,
							 energyDrink,
							 excercise,
							 onNewDay }) => {

	let _place, _date, _energyDrink, _excercise

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			place: _place.value,
			date: _date.value,
			energyDrink: _energyDrink.checked,
			excercise: _excercise.checked
		})
		_place.value = ''
		_date.value = ''
		_energyDrink.checked = false
		_excercise.checked = false

	}

	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="place">place Name</label>
			<Autocomplete options={tahoeplaces}
				   		  ref={input => _place = input}/>

			<label htmlFor="date">Date</label>
			<input id="date"
				   type="date"
				   required
				   defaultValue={date}
				   ref={input => _date = input}/>

			<div>
				<input id="energyDrink"
					   type="checkbox"
					   defaultChecked={energyDrink}
					   ref="energyDrink"
					   ref={input => _energyDrink = input}/>
				<label htmlFor="energyDrink">energyDrink Day</label>
			</div>

			<div>
				<input id="excercise"
					   type="checkbox"
					   defaultChecked={excercise}
					   ref="excercise"
					   ref={input => _excercise = input}/>
				<label htmlFor="excercise">
					excercise Day
				</label>
			</div>
			<button>Add Day</button>
		</form>
	)
}

AddDayForm.defaultProps = {
	place: "Kirkwood",
	date: "2017-02-12",
	energyDrink: true,
	excercise: false
}


AddDayForm.propTypes = {
	place: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	energyDrink: PropTypes.bool.isRequired,
	excercise: PropTypes.bool.isRequired
}
