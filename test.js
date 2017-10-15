const {default: ok} = require("./ok");

function notok(cond) {
  console.assert(!cond);
}

module.exports = {ok, notok};
