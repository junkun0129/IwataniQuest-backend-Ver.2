const { signUp, signIn } = require("../middlewares/auth.middleware");

const signUpController = async (req, res, next) => {
  const { email, password, name } = req.body;
  console.log(email, "this is email");
  const signInService = await signUp(req.body);
  return res.json(signInService);
};

const signInController = async (req, res, next) => {
  const { email, password } = req.body;
  const signInService = await signIn(email, password);

  console.log(signInService, "dddddddddddddddddddddd");
  return res.json(signInService);
};

module.exports = {
  signUpController,
  signInController,
};
