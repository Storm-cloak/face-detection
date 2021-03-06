const getProfile = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("facedetection.users")
    .where({ id: id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("user not found");
      }
    })
    .catch((err) => res.status(400).json("error getting user"));
};

module.exports = {
  getProfile: getProfile,
};
