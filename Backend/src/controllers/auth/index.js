module.exports = {
  login(req, res) {
    const { email, password } = req.body;

    if (email == "root" && password == "root") {
      res.status(200).send();
    } else {
      res.status(401).send();
    }
  },
};
