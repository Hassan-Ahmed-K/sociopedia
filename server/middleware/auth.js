import jwt from "jsonwebtoken";

export const verify_token = (req, res, next) => {
  try {
     var token = req.header("Authorization");

    if (!token) {
      return res.status(403).json("Acess Denied");
    }
    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log("Verified");
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
