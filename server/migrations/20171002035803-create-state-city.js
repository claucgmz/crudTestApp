const state_cities = [
  {
    state: 'CHH',
    city: 'Chihuahua',
  },
  {
    state: 'CHH',
    city: 'Delicias',
  },
  {
    state: 'CHH',
    city: 'Camargo',
  },
  {
    state: 'SON',
    city: 'Hermosillo',
  },
  {
    state: 'SON',
    city: 'Obregón',
  },
  {
    state: 'SON',
    city: 'San Carlos',
  },
  {
    state: 'CDMX',
    city: 'Ciudad de México',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable('StateCities', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        state: {
          required: true,
          type: Sequelize.STRING,
        },
        city: {
          required: true,
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      }).then(() => {
        queryInterface.bulkInsert('StateCities', state_cities);
      }),
    ];
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StateCities');
  },
};
