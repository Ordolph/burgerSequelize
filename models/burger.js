module.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define('Burger', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 50]
            }
        },

        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Burger;
};