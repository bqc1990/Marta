import React from "react";
import axios from "axios";
import Station from "./Station";

class Marta extends React.Component {
  constructor() {
    super();
    this.state = {
      dataForAll: [
        {
          DESTINATION: "Hamilton E Holmes",
          DIRECTION: "W",
          EVENT_TIME: "12/27/2013 12:29:42 PM",
          LINE: "BLUE",
          NEXT_ARR: "12:29:52 PM",
          STATION: "VINE CITY STATION",
          TRAIN_ID: "101206",
          WAITING_SECONDS: "-31",
          WAITING_TIME: "Boarding",
        },
        {
          DESTINATION: "Airport",
          DIRECTION: "S",
          EVENT_TIME: "12/27/2013 12:30:06 PM",
          LINE: "GOLD",
          NEXT_ARR: "12:30:16 PM",
          STATION: "GARNETT STATION",
          TRAIN_ID: "302507",
          WAITING_SECONDS: "-7",
          WAITING_TIME: "Boarding",
        },
        {
          DESTINATION: "Airport",
          DIRECTION: "S",
          EVENT_TIME: "12/27/2013 12:30:06 PM",
          LINE: "GREEN",
          NEXT_ARR: "12:30:16 PM",
          STATION: "GARNETT STATION",
          TRAIN_ID: "302508",
          WAITING_SECONDS: "-7",
          WAITING_TIME: "Boarding",
        },
        {
          DESTINATION: "Airport",
          DIRECTION: "S",
          EVENT_TIME: "12/27/2013 12:30:06 PM",
          LINE: "RED",
          NEXT_ARR: "12:30:16 PM",
          STATION: "GARNETT STATION",
          TRAIN_ID: "302509",
          WAITING_SECONDS: "-7",
          WAITING_TIME: "Boarding",
        },
        {
          DESTINATION: "Airport",
          DIRECTION: "S",
          EVENT_TIME: "12/27/2013 12:30:06 PM",
          LINE: "BLUE",
          NEXT_ARR: "12:30:16 PM",
          STATION: "GARNETT STATION",
          TRAIN_ID: "3025010",
          WAITING_SECONDS: "-7",
          WAITING_TIME: "Boarding",
        },
      ],
      data_VINE_CITY_STATION: [],
    };
  }

  filterStation = () => {
    //filter all data with station GARNETT STATION
    let data_VINE_CITY_STATION = this.state.dataForAll.filter(
      (item) => item.STATION === "GARNETT STATION"
    );

    this.setState({
      data_VINE_CITY_STATION,
    });
  };

  componentDidMount() {
    axios
      .get(
        "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=1f3d4016-3d22-4132-a3fa-64a3276866e0"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          dataForAll: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.filterStation();
  }

  render() {
    return (
      <div className="container">
        {this.state.dataForAll.map((item, index) => (
          <Station key={index} data={item} />
        ))}
      </div>
    );
  }
}

export default Marta;
