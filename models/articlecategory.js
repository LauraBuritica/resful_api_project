'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleCategory.belongsTo(models.Category);
      models.Category.hasMany(ArticleCategory)

      ArticleCategory.belongsTo(models.Article);
      models.Article.hasMany(ArticleCategory)
    }
  }
  ArticleCategory.init({
    articleId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticleCategory',
  });
  return ArticleCategory;
};