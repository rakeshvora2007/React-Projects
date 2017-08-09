import React, {Component} from 'react';
import '../stylesheets/ui.scss';

export default class RunningDayCount extends Component {
  render(){
    return(
      <div className="running-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="spent-days">
          <span>2 days</span>
        </div>
        <div className="wait-days">
          <span>1 sweat day</span>
        </div>
      </div>
    )
  }
}
