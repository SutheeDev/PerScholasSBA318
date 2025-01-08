const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //   res.send("Hello World");
  throw new Error("test the error middleware");
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send("Something went wrong, try again later.");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
