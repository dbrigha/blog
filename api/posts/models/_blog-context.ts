import { kMaxLength } from 'buffer';
import { DataTypes, Sequelize } from 'sequelize';
import { Post } from './post.model';

const blogContext = new Sequelize("Blog", process.env['mssqlUserName'], process.env['mssqlPassword'],
  {
    host: process.env['mssqlHost'],
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
      }
    }
  });
Post.init({
  id: {
    type: new DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(250),
  },
  subtitle: {
    type: new DataTypes.STRING(250),
  },
  markDown: {
    type: new DataTypes.STRING(kMaxLength),
  },
  createdDate: {
    type: new DataTypes.DATE,
    allowNull: false,
  },
  updatedDate: {
    type: new DataTypes.DATE,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  timestamps: false,
  sequelize: blogContext,
  tableName: 'Posts',
});
