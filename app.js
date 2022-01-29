const express = require("express");
const app = express();

// app.set()
app.use(express.json());
//
//
app.get("/", (req, res) => {
  console.log("home page");
  res.json({ message: "home page" });
});

const userRouter = require("./src/routes/users.routes");

app.use("/users", userRouter);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(err);
  console.log("App listeninig on port 3000");
});
