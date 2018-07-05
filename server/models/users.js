const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
    });
  
    // User.associate = models => {
    //   User.hasMany(models.Recipe);
    // };
  
    return User;
  };
  
  export default user;