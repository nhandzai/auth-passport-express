'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class productSizes extends Model {
    static associate(models) {

      this.belongsTo(models.products, { foreignKey: 'productId', as: 'product' });
    }
  }

  productSizes.init({
    
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'productSizes',
   
    timestamps: true,
  });

  return productSizes;
};
