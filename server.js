const express = require("express");

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "wifinder-app",
  password: "BigSecret!",
  database: "wifinder"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("MySQL DB Connected");
});

const app = express();

app.listen("3000", () => console.log("Server started on port 3000"));

app.get("/api/reviews/:id", (req, res) => {
  let LocationID = req.params.id;
  console.log(LocationID);
  let sql = `SELECT Username,ReviewDate,ReviewRating,ReviewDescription FROM reviews WHERE LocationID=?`;
  let query = db.query(sql, [LocationID], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/api/AdvanceSearch/", (req, res) => {
  let postData = req.query;
  let sql = `SELECT w.LocationID, w.LocationName, w.LocationType, w.LocationAddress, w.LocationSuburb, w.Latitude, w.Longitude,
      (3959 * acos(cos(radians(?))*cos(radians(Latitude))*cos(radians(Longitude)-radians(?))+sin(radians(?))*sin(radians(Latitude))))
      AS distance, ifnull(round(avg(r.ReviewRating),1),0) AS AvgRating FROM wifi_location w
      LEFT JOIN reviews r
      ON w.LocationID = r.LocationID
      WHERE LocationType = ?
      GROUP BY LocationID
      HAVING distance<10000 AND avgRating >= ?
      ORDER BY ? LIMIT 0,20`;
  let query = db.query(
    sql,
    [
      postData.Latitude,
      postData.Longitude,
      postData.Latitude,
      postData.LocationType,
      postData.Rating,
      postData.Order
    ],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.get("/api/location/:id", (req, res) => {
  let sql = `SELECT w.LocationID, w.LocationName, w.LocationType, w.LocationAddress, w.LocationSuburb, w.Latitude, w.Longitude, 
  ifnull(round(avg(r.ReviewRating),1),0) AS AvgRating
  FROM wifi_location w 
  LEFT JOIN reviews r
  ON w.LocationID = r.LocationID
  Where w.LocationID=?
  GROUP BY LocationID `;
  let query = db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
