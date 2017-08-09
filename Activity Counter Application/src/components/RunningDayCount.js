import React, {Component, PropTypes} from 'react';
import '../stylesheets/ui.scss';
import MdDirectionsRun from 'react-icons/lib/md/directions-run';
import MdDirectionsWalk from 'react-icons/lib/md/directions-walk';
import MdAirlineSeatReclineNormal from 'react-icons/lib/md/airline-seat-recline-normal';


export default class RunningDayCount extends Component {

  decimalToPercent(value) {
    return value * 100;
  }

  calcGoalProgress(total, goal) {
    return this.decimalToPercent(total/goal);
  }

  render(){
    return(
      <div className="running-day-count">
        <div className="total-days">
        <MdDirectionsRun />
        <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="spent-days">
        <MdDirectionsWalk />
        <span>{this.props.spent}</span>
          <span>days</span>
        </div>
        <div className="wait-days">
        <MdAirlineSeatReclineNormal />
        <span>{this.props.wait}</span>
          <span>days</span>
        </div>
        <div>
        <span>{this.calcGoalProgress(this.props.total, this.props.goal)}%</span>
        </div>
      </div>
    )
  }
}

RunningDayCount.defaultProps = {
  total: 50,
  spent: 20,
  wait: 10,
  goal:100
}

RunningDayCount.propTypes = {
  total: PropTypes.number,
  spent: PropTypes.number,
  wait: PropTypes.number,
  goal: PropTypes.number
}
