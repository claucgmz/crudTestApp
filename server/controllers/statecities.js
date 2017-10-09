const StateCity = require('../models').StateCity;

module.exports = {
  create(req, res) {
    return StateCity
      .create({
        state: req.body.state,
        city: req.body.city,
      })
      .then(stateCity => res.status(201).send(stateCity))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return StateCity
      .all()
      .then(stateCities => res.status(200).send(stateCities))
      .catch(error => res.status(400).send(error));
  },
  retrieveStateCity(req, res) {
    return StateCity
      .findOne({
        where: {
          state: req.query.state,
          city: req.query.city,
        },
      })
      .then((stateCity) => {
        if (!stateCity) {
          return res.status(404).send({
            message: 'StateCity not found',
          });
        }
        return res.status(200).send(stateCity);
      })
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return StateCity
      .findById(req.params.id, {})
      .then((stateCity) => {
        if (!stateCity) {
          return res.status(404).send({
            message: 'stateCity Not Found',
          });
        }
        return res.status(200).send(stateCity);
      })
      .catch(error => res.status(400).send(error));
  },
};
