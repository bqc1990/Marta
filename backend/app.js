const { json } = require("express");
const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/station", (req, res) => {
  request(
    {
      url:
        "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=1f3d4016-3d22-4132-a3fa-64a3276866e0",
    },
    (err, response, body) => {
      if (err || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
