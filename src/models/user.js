const { Sequelize, Model, DataTypes } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(process.env.SQLDB_URI, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const User = sequelize.define("User", {
  name: DataTypes.TEXT,
  address: DataTypes.TEXT,
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
  },
});
console.log(User === sequelize.models.User);

class UserActions {
  constructor() {}

  async createUser(data) {
    if (data) {
      // await sequelize.sync({ force: true });
      await User.create({ name: data.name, address: data.address });
      return { name: data.name, address: data.address };
    } else {
      throw new Error(
        "Client didn't provide the necessary data for registration"
      );
    }
  }

  async getAllusers() {
    const users = await User.findAll();
    console.log(users.every((user) => user instanceof User)); // true
    console.log("All users:", JSON.stringify(users, null, 2));
    return "All users:", JSON.stringify(users, null, 2);
  }

  async getUser(id) {
    const user = await User.findAll({
      where: {
        id: id,
      },
    });
    // console.log(users.every((user) => user instanceof User)); // true
    console.log(`User id: ${id}`, JSON.stringify(user, null, 2));
    return `User id ${id}`, JSON.stringify(user, null, 2);
  }

  async deleteUser(id) {
    const user = await User.destroy({
      where: {
        id: id,
      },
    });
    return `User id ${id} Has Deleted`;
  }

  // this commeted func is for develop period only if I want to drop the table
}
// (async () => {
//     await User.drop();
//     console.log("User table dropped!");
//
//
// }) ();
//

module.exports = UserActions;
