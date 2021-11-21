import { Model, Optional } from 'sequelize';

interface PostAttributes {
  id: number;
  title: string | null;
  subtitle: string | null;
  markDown: string | null;
  createdDate: Date;
  updatedDate: Date;
  isDeleted: boolean;
}
export class Post extends Model<PostAttributes>
  implements PostAttributes {
  id: number;
  title: string;
  subtitle: string;
  markDown: string;
  createdDate: Date;
  updatedDate: Date;
  isDeleted: boolean;
}
