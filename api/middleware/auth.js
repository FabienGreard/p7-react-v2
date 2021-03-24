const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
	try {
		// const token = localStorage.getItem("token");
		// const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		// const userId = decodedToken.id;
		// console.log(req.body);
		// if (req.body.userId && req.body.userId !== userId) {
		// 	throw "user Id non valable";
		// } else {
		// 	next();
		// }
		console.log(req);
		next();
	} catch (error) {
		res.status(401).json({ error: error | "requête non authentifiée" });
	}
};
