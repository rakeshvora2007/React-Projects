import React, {Component} from 'react';
import '../stylesheets/ui.scss';

export default class RunningDayCount extends Component {
  render(){
    return(
      <div className="running-day-count">
        <div className="total-days">
        <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="spent-days">
        <span>{this.props.spent}</span>
          <span>days</span>
        </div>
        <div className="wait-days">
        <span>{this.props.wait}</span>
          <span>days</span>
        </div>
        <div>
        <span>{this.props.goal}</span>
        </div>
      </div>
    )
  }
}
