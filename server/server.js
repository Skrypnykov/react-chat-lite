const app = require("express")();
const server = require("http").Server(app);
const cors = require("cors");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

require("dotenv").config({
  path: "server/.env",
});

const rooms = new Map();

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
});

const PORT = process.env.PORT ? process.env.PORT : 3001;

server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`SERVER IS RUNNING: http://localhost:${PORT}`);
});
