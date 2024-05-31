const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hist_plans = sequelize.define('Hist_plans', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Fecha_venta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    LocationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Plan_type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
     ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Ventas_pesos: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Ventas_piezas: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
}, {
    tableName: 'Hist_plans',
    timestamps: false // Disable timestamps if you don't want Sequelize to auto-manage createdAt and updatedAt fields
});

module.exports = Hist_plans;
