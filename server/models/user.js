'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
            required: true
        },
        last_name: {
            type: DataTypes.STRING,
            required: true
        }
    });

    User.associate = (models) => {
        User.belongsTo(models.StateCity, {
            foreignKey: 'stateCityId',
            as : 'stateCity'
        });
    };


    return User;
};