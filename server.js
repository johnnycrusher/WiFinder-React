const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen("5000", () => console.log("Server started on port 5000"));

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
  console.log(postData);
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

app.get("/api/BasicSearch/", (req, res) => {
  postData = req.query;
  let sql = `SELECT w.LocationID, w.LocationName, w.LocationType, w.LocationAddress, w.LocationSuburb, w.Latitude, w.Longitude,
      (3959 * acos(cos(radians(?))*cos(radians(Latitude))*cos(radians(Longitude)-radians(?))+sin(radians(?))*sin(radians(Latitude))))
      AS distance, ifnull(round(avg(r.ReviewRating),1),0) AS AvgRating FROM wifi_location w
      LEFT JOIN reviews r
      ON w.LocationID = r.LocationID
      GROUP BY LocationID
      HAVING distance<10000
      ORDER BY distance LIMIT 0,20`;

  let query = db.query(
    sql,
    [postData.Latitude, postData.Longitude, postData.Latitude],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.get("/api/location/:id", (req, res) => {
  let LocationID = req.params.id;
  let sql = `SELECT w.LocationID, w.LocationName, w.LocationType, w.LocationAddress, w.LocationSuburb, w.Latitude, w.Longitude, 
  ifnull(round(avg(r.ReviewRating),1),0) AS AvgRating
  FROM wifi_location w 
  LEFT JOIN reviews r
  ON w.LocationID = r.LocationID
  Where w.LocationID=?
  GROUP BY LocationID `;
  let query = db.query(sql, [LocationID], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/api/user/register", (req, res) => {
  let bodyData = req.body;
  console.log(bodyData);
  let FirstName = req.body.FirstName;
  let LastName = req.body.LastName;
  let UserName = req.body.UserName;
  let EmailAddress = req.body.EmailAddress;
  var Password = req.body.Password;
  var Salt;
  bcrypt.genSalt(10, (err, salt) => {
    var PasswordSalt = salt;
    bcrypt.hash(Password, salt, (err, hash) => {
      if (err) throw err;
      var PasswordHash = hash;
      console.log(`Password:${PasswordHash}  Salt:${PasswordSalt}`);
      let sql = `INSERT INTO users(FirstName,LastName,UserName,EmailAddress,PasswordSalt,PasswordHash)
      VALUES(?,?,?,?,?,?)`;
      let getID = `Select UserID From Users WHERE UserName = ?`;
      let userSql = `INSERT INTO membership(UserID,UserName,Membership)
      values(?,?,?)`;
      var userID = 0;
      //TODO: need to add username and email any record

      let query = db.query(
        sql,
        [
          FirstName,
          LastName,
          UserName,
          EmailAddress,
          PasswordSalt,
          PasswordHash
        ],
        (err, result) => {
          if (err) throw err;
        }
      );
      let queryTwo = db.query(getID, [UserName], (err, result) => {
        if (err) throw err;
        userID = result[0].UserID;
        let queryThree = db.query(
          userSql,
          [userID, UserName, "Standard"],
          (err, result) => {
            console.log(userID);
            if (err) throw err;
            res.send(result);
          }
        );
      });
    });
  });
});
