const jwt = require("jsonwebtoken");
require("dotenv").config();
const config = require("../db");
const connection = config.connection;

exports.getPosts = (req, res, next) => {
  connection.query("select * from post", (err, results) => {
    res.send(results);
    console.log(results);
  });
};

exports.createPost = (req, res, next) => {
  console.log(req.body);
  const { content, token, title, imgUrl } = req.body;
  const date = Date.now();
  const formatedDate = new Intl.DateTimeFormat().format(date);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(date, formatedDate);
  connection.query(
    "INSERT INTO post (content,title,img, user_id,username, date_time) VALUES (?,?,?,?,?,?)",
    [content, title, imgUrl, decoded.id, decoded.username, formatedDate],
    (err, results) => {
      if (results) {
        res.send(results);
      } else {
        res.send(err.code);
      }
    }
  );
};

exports.deletePost = (req, res) => {
  const postId = req.params.id;
  const token = req.body.token;
  const user_id = req.body.user_id;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (user_id === decoded.id) {
    connection.query(
      "DELETE FROM post WHERE id = ?",
      postId,
      (err, results) => {
        if (results) {
          console.log("deleted");
        } else {
          console.log(err);
        }
      }
    );
  } else {
    console.log("Cannot delete another user's post");
  }
};

exports.likePost = (req, res) => {};
