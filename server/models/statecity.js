'use strict';

module.exports = (sequelize, DataTypes) => {
    const StateCity = sequelize.define('StateCity', {
        state: {
            type: DataTypes.STRING,
            required: true
        },
        city: {
            type: DataTypes.STRING,
            required: true
        }
    });

    StateCity.associate = (models) => {
        StateCity.hasMany(models.User, {
            foreignKey: 'stateCityId'
        });
    };


    return StateCity;
};