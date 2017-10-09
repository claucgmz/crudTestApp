const stateCitiesController = require('../controllers').statecities;
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the CRUD API!',
  }));

  app.post('/api/statecities', stateCitiesController.create);
  app.get('/api/statecities', stateCitiesController.list);
  app.get('/api/statecities/:id', stateCitiesController.retrieve);
  app.get('/api/singlestatecities/', stateCitiesController.retrieveStateCity);
  app.post('/api/users', usersController.createUser);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:id', usersController.retrieve);
  app.put('/api/users/:id', usersController.updateUser);
  app.delete('/api/users/:id', usersController.destroy);
};
