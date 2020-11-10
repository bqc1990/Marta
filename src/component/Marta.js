import React from "react";
import axios from "axios";
import Station from "./Station";
import "../style/marta.css";
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
      data_STATION: new Map(),
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

  processDataGroupByStation = async () => {
    let map = new Map();

    this.state.dataForAll.forEach((da) => {
      if (map.has(da.STATION)) {
        map.get(da.STATION).push({
          direction: da.DIRECTION,
          line: da.LINE,
          waiting_time: da.WAITING_TIME,
        });
      } else {
        map.set(da.STATION, [
          {
            direction: da.DIRECTION,
            line: da.LINE,
            waiting_time: da.WAITING_TIME,
          },
        ]);
      }
    });
    this.setState({
      data_STATION: map,
    });

    console.log("process", map);
  };

  componentDidMount() {
    axios
      .get(
        "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=1f3d4016-3d22-4132-a3fa-64a3276866e0"
      )
      .then((response) => {
        this.setState({
          dataForAll: response.data,
        });
        console.log("all", response.data);
        this.processDataGroupByStation();
      })
      .catch((error) => {
        console.log(error);
      });
    this.interval = setInterval(() => {
      axios
        .get(
          "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=1f3d4016-3d22-4132-a3fa-64a3276866e0"
        )
        .then((response) => {
          this.setState({
            dataForAll: response.data,
          });
          console.log("all", response.data);
          this.processDataGroupByStation();
        })
        .catch((error) => {
          console.log(error);
        });
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const items = [];
    this.state.data_STATION.forEach((val, key) =>
      items.push(<Station item={val} key={key} station={key} />)
    );

    return <div className="flex-container">{items}</div>;
  }
}

export default Marta;
