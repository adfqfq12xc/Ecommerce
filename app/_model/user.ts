import { DataTypes } from 'sequelize';
import sequilize from '../_utils/sequilize'


const User = sequilize.define(
  'User',
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    admin:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    image:{
      type:DataTypes.STRING,
      defaultValue:''
    }
  }, );
export default User
