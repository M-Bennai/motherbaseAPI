const { User } = require("../models");
const { v4: uuidv4 } = require("uuid");

const userController = {
  getClientUser: async () => {
    const clientsUsers = await User.findAll({
      where: { role: "client" },
    });
    return clientsUsers;
  },
};

module.exports = userController;
