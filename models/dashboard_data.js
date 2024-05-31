const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const dashboard_data = sequelize.define('dashboard_data', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Ventas_piezas: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Ventas_pesos: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Canal_venta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Variacion_demanda: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Accuracy: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Error: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Outliers: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Promo: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
     ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    LocationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Ult_actualizacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Plan_ventas_piezas: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    Plan_ventas_pesos: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
}, {
    tableName: 'dashboard_data',
    timestamps: false // Disable timestamps if you don't want Sequelize to auto-manage createdAt and updatedAt fields
});

module.exports = dashboard_data;
