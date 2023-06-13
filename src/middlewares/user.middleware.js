const User = require("../model/User");
const Status = require("../model/UserStatus");

const userSave = async ({
  name,
  level,
  at,
  exp,
  hp,
  requireExp,
  x,
  y,
  mapState,
}) => {
  const user = await User.findOne({ name });

  const status = await Status.findOne({ _id: user.status });

  await status.overwrite({
    level,
    exp,
    requireExp,
    hp,
    maxmumHp: hp,
    at,
    x,
    y,
    mapState,
  });

  await console.log(status, "saved user");

  return await status.save();
};

module.exports = {
  userSave,
};
