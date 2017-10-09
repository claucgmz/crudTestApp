const User = require('../models').User;
const StateCity = require('../models').StateCity;

module.exports = {
  createUser(req, res) {
    return StateCity
      .findOne({
        where: {
          state: { $iLike: req.body.state },
          city: { $iLike: req.body.city },
        },
      })
      .then((stateCity) => {
        if (!stateCity) {
          return res.status(404).send({
            message: 'StateCity not found',
          });
        }
        return User
          .create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            stateCityId: stateCity.id,
          })
          .then(user => res.status(201).send(user))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .all({
        include: [{
          model: StateCity,
          as: 'stateCity',
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return User
      .findById(req.params.id, {
        include: [{
          model: StateCity,
          as: 'stateCity',
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },
  updateUser(req, res) {
    return StateCity
      .findOne({
        where: {
          state: { $iLike: req.body.state },
          city: { $iLike: req.body.city },
        },
      })
      .then((stateCity) => {
        if (!stateCity) {
          return res.status(404).send({
            message: 'StateCity not found',
          });
        }
        return User
          .findById(req.params.id, {})
          .then((user) => {
            if (!user) {
              return res.status(404).send({
                message: 'User not found',
              });
            }
            return user
              .update({
                first_name: req.body.first_name || user.first_name,
                last_name: req.body.last_name || user.last_name,
                stateCityId: stateCity.id || user.stateCityId
              })
              .then(() => res.status(200).send(user))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error))
  },
  destroy(req, res) {
    return User
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(200).send({ message: 'User deleted.' }))
          .catch(error => res.status(400).send(error));
      }).catch(error => res.status(400).send(error));
  },
};
