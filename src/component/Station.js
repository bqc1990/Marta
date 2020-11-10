import React from "react";
import "../style/station.css";
class Station extends React.Component {
  //set className for difference line, like red line will have according color
  setClassName = (element) => {
    let classes = " m-2 btn btn-";
    if (element.line === "GOLD") {
      classes += "warning";
    } else if (element.line === "RED") {
      classes += "danger";
    } else if (element.line === "GREEN") {
      classes += "success";
    } else if (element.line === "BLUE") {
      classes += "primary";
    }
    return classes;
  };

  render() {
    return (
      <div className="card-container card-deck">
        <div className="card mt-2">
          <div className="card-body">
            {this.props.item.map((element) => (
              <div>
                <span className={this.setClassName(element)}>
                  {element.direction}
                </span>
                <span>{element.waiting_time}</span>
              </div>
            ))}
          </div>
          <div className="card-footer text-muted">
            <h5>{this.props.station}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Station;
