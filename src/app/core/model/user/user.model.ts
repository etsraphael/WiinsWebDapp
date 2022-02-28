export class UserModel {
  pseudo!: string;
  email!: string;
  password!: string;
  active!: boolean;
  profile!: string;
  deactivatedAt!: Date;
  createdAt!: Date;
  deletedAt!: Date;
  updatedAt!: Date;
  chargedUntil!: Date;
}
