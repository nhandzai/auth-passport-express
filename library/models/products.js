'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define association here if needed
    }
  }

  products.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    imageLink: DataTypes.STRING,
    shortDescription: DataTypes.TEXT,
    detail: DataTypes.TEXT,
    material: DataTypes.STRING,
    weightKg: DataTypes.FLOAT,
    stockQuantity: DataTypes.INTEGER,
    promotion: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    category: DataTypes.STRING,
    realPrice: {
      type: DataTypes.VIRTUAL,
      get() {
        if (this.price && this.promotion) {
          return (this.price * (1 - (this.promotion / 100))).toFixed(2);
        }
        return this.price;
      }
    }
  }, {
    sequelize,
    modelName: 'products',
  });

  return products;
};
