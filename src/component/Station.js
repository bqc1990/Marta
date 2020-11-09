import React from "react";

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
      <div className="card-deck">
        <div className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">{this.props.data["STATION"]}</h5>

            <span className={this.setClassName()}>
              {this.props.data.DIRECTION}
            </span>
            <span className="card-text"> {this.props.data.NEXT_ARR}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Station;
