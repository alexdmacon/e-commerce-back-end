// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
}),

// Products belongToMany Tags (through ProductTag)
Product.belongstoMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'product_id',
  as: 'product_tag',
})

// Tags belongToMany Products (through ProductTag)

ProductTag.belongstoMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: 'tag_id',
  as: 'product_tag',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
