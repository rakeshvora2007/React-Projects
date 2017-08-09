import MdDirectionsRun from 'react-icons/lib/md/directions-run';
import MdDirectionsWalk from 'react-icons/lib/md/directions-walk';
import MdAirlineSeatReclineNormal from 'react-icons/lib/md/airline-seat-recline-normal';
import { PropTypes } from 'react';

export const RunningDayRow = ({place, date, energyDrink, excercise}) => (
  <tr>
    <td>
      {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
    </td>
    <td>
      {place}
    </td>
    <td>
      {(energyDrink) ? <MdDirectionsRun /> : null}
    </td>
    <td>
      {(excercise) ? <MdDirectionsWalk /> : null}
    </td>
  </tr>
)

RunningDayRow.propTypes = {
  place: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  energyDrink: PropTypes.bool,
  excercise: PropTypes.bool

}
