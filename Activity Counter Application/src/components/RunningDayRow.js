import MdDirectionsRun from 'react-icons/lib/md/directions-run';
import MdDirectionsWalk from 'react-icons/lib/md/directions-walk';
import MdAirlineSeatReclineNormal from 'react-icons/lib/md/airline-seat-recline-normal';
import { PropTypes } from 'react';

export const RunningDayRow = ({place, date, energyDrink, excercise}) => (
  <tr>
    <td>
      {date}
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
  date: PropTypes.string.isRequired,
  energyDrink: PropTypes.bool,
  excercise: PropTypes.bool

}
