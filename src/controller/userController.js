exports.getUser = (req, res, next) => {
  res.status(200).json({
    users: [
      {
        user: "Taj",
        email: "Bla@gmail.com",
      },
      {
        user: "Dans",
        email: "Bla2@gmail.com",
      },
    ],
  });
};

exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.status(201).json([
    {
      name: name,
      email: email,
      password: password,
    },
  ]);
};

exports.updateUser = (req, res, next) => {};

exports.deleteUser = (req, res, next) => {};
