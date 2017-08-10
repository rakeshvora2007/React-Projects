import MdDirectionsRun from 'react-icons/lib/md/directions-run';
import MdDirectionsWalk from 'react-icons/lib/md/directions-walk';
import MdAirlineSeatReclineNormal from 'react-icons/lib/md/airline-seat-recline-normal';
import { RunningDayRow } from './RunningDayRow';
import { PropTypes } from 'react';
import { Link } from 'react-router-dom';

export const RunningDayList = ({days, filter}) => {

  const filteredDays = (!filter ||
        !filter.match(/energyDrink|excercise/)) ?
        days :
        days.filter(day => day[filter]);

return(
  <table>
    <thead>
      <tr>
        <th>date</th>
        <th>place</th>
        <th>energyDrink</th>
        <th>excercise</th>
      </tr>
      <tr>
        <td colSpan={4}>
        <Link to="/list-days">All Days</Link>
        <Link to="/list-days/energyDrink">Energy Drink</Link>
        <Link to="/list-days/excercise">Excercise</Link>
        </td>
      </tr>
    </thead>
    <tbody>
      {filteredDays.map((day, i) =>
        <RunningDayRow key={i}
                        {...day}/>
      )}
    </tbody>
  </table>
)

}

RunningDayList.propTypes = {
  days: (props) => {
    if(!Array.isArray(props.days)) {
      return new Error ("It must be an array");
    } else if (!props.days.length) {
      return new Error ("It must not be empty");
    } else {
      return null;
    }
  }
}
