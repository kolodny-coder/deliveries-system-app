const User = require("../models/user");

exports.usersList = async () => {
    const users = await User.findAll();
    return "All users:", JSON.stringify(users, null, 2);
};

exports.createUser = async (data) => {
    if (data) {
        // await sequelize.sync({ force: true });
        await User.create({name: data.name, address: data.address});
        return {name: data.name, address: data.address};
    } else {
        throw new Error(
            "Client didn't provide the necessary data for registration"
        );
    }
};

exports.getUser = async (id) => {
    return await User.findAll({
        where: {
            id: id,
        },
    });
};

exports.deleteUser = async (id) => {
    await User.destroy({
        where: {
            id: id,
        },
    });
    return `User id ${id} Has been Deleted`;
};
