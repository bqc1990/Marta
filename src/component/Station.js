import React from "react";
import "../style/station.css";
class Station extends React.Component {
  //set className for difference line, like red line will have according color
  setClassName = () => {
    let classes = "btn btn-";
    if (this.props.data.LINE === "GOLD") {
      classes += "warning";
    } else if (this.props.data.LINE === "RED") {
      classes += "danger";
    } else if (this.props.data.LINE === "GREEN") {
      classes += "success";
    } else if (this.props.data.LINE === "BLUE") {
      classes += "primary";
    }
    return classes;
  };

  render() {
    return (
      <div className="card-container card-deck">
        <div className="card mt-2">
          <div className="card-body">
            <span className={this.setClassName()}>
              {this.props.data.DIRECTION}
            </span>
            <span> {this.props.data.WAITING_TIME}</span>
          </div>
          <div className="card-footer text-muted">
            {this.props.data["STATION"]}
          </div>
        </div>
      </div>
    );
  }
}

export default Station;
