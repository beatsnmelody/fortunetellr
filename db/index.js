module.exports = {
    client: require("./client"), // adds key/values from users.js
    ...require("./users"), // adds key/values from users.js
    ...require("./eightBall"), // adds key/values from activites.js
    ...require("./tarot"), // etc
    ...require("./zodiac"), // etc
    ...require("./pendulum"), // etc
    ...require("./aura"), // etc
    ...require("./comments"), // etc
  };