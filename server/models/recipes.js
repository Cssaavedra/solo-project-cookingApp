const recipes = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipe', {
      title: {
        type: DataTypes.STRING,
        unique: true,
      },
    });
  
    Recipe.associate = models => {
      Recipe.hasMany(models.User);
    };
  
    return Recipe;
  };
  
  export default recipes;