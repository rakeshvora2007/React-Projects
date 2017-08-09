import MdDirectionsRun from 'react-icons/lib/md/directions-run';
import MdDirectionsWalk from 'react-icons/lib/md/directions-walk';
import MdAirlineSeatReclineNormal from 'react-icons/lib/md/airline-seat-recline-normal';
import { RunningDayRow } from './RunningDayRow';
import { PropTypes } from 'react';

export const RunningDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>date</th>
        <th>place</th>
        <th>energyDrink</th>
        <th>excercise</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <RunningDayRow key={i}
                        {...day}/>
      )}
    </tbody>
  </table>

)

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
