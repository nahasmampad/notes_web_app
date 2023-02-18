const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Mysql connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "notes",
});

con.connect((err) => {
  if (err) throw err;
  console.log("DB Connected");
});

// Routes

// get all notes
app.get("/notes", (req, res) => {
  con.query("select * from notes", (err, result, fields) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

// Add Note
app.post("/notes", (req, res) => {
  const notes = req.body;
  console.log(notes);
  let qr = `INSERT INTO notes(id,title, note, date) values('${notes.id}','${notes.title}', '${notes.note}', curdate())`;
  con.query(qr, (err, resul) => {
    if (err) {
      res
        .status(400)
        .json({ message: "Operation Failed", success: false, err });
    } else {
      res.status(200).json({ message: "Note Added", success: true });
    }
  });
});

// Delete Note
app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  let qr = `delete from notes where id=${id}`;
  con.query(qr, (err, result) => {
    if (err) {
      res.status(400).json({ message: "Operation Failed", success: false });
    } else {
      res.status(200).json({ message: "Note Deleted", success: true });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
