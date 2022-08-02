const express = require("express");
const cors = require("cors");

const auth = require("./controllers/auth");
const theme = require("./controllers/theme");
const chat = require("./controllers/chat");

const init = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.post("/auth/login", auth.login);
  app.get("/theme", theme.get);
  app.get("/chat", chat.get);

  const port = process.env.PORT || 3002;
  app.listen(port, () => console.log(`server running on port: ${port}`));
};

module.exports = init;
