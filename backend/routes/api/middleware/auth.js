const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ message: "No token authorization denied" });
  }

  try {
    const decoded = jwt.verify(token);

    req.user = decoded.user;

    next();
  } catch (error) {
    res.status(401).json({ message: "Toekn is not valid" });
  }
};

module.exports = auth;
