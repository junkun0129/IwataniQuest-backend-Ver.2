const config = require("../config");
const walkingPerson = [
  { name: "iwatani", email: "penpen@jum.com", x: 2000, y: 1000 },
];
module.exports = (http) => {
  const soketIO = require("socket.io")(http, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  soketIO.on("connection", (socket) => {
    // console.log(">>>>>>>", socket, ">>>>>>>>>")

    socket.on("oi", (data) => {
      console.log(data, "ikuzoooooooooooooo");
    });

    socket.on("encount", (data) => {
      if (data === "hit") {
        socket.emit("screenSwitch", "hit");
      }
    });

    socket.on("back", (data) => {
      if (data == "backback") {
        socket.emit("backSwitch", "backback");
        console.log("kaettekitaOoo");
      }
    });

    socket.on("save", (data) => {
      socket.emit("save", data);
    });

    socket.on("textOpen", (data) => {
      if (data === "open") socket.emit("textOpentoField", "open");
      if (data === "close") socket.emit("textOpentoField", "close");
    });

    socket.on("textSubmit", (data) => {
      console.log(data);
      socket.emit("textAppear", data);
    });

    socket.on("walk", (data) => {
      //   console.log(data);
      const isLogin = walkingPerson.find((each) => each.email === data.email);
      if (!isLogin) {
        walkingPerson.push(data);
      } else {
        // console.log();
        const index = walkingPerson
          .map((each) => each.email)
          .indexOf(data.email);
        // console.log(index);
        walkingPerson.splice(index, index, data);
      }

      console.log(walkingPerson);
    });

    socket.on("saveDone", (data) => {
      console.log(data, ";l;;;;");
      socket.emit("saveDoneToGP", data);
    });
    setInterval(() => {
      // console.log(walkingPerson);
      socket.emit("pedestrians", walkingPerson);
    }, 17);
  });
};
