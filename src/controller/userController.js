exports.getUser = (req, res, next) => {
  res.status(200).json({
    user: "Taj",
    email: "Bla@gmail.com",
  });
};

exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.state(200).json({
    userName: name,
    email: email,
    password: password,
  });
};

exports.updateUser = (req, res, next) => {};

exports.deleteUser = (req, res, next) => {};
