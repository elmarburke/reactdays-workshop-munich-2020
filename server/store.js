const { Sequelize } = require("sequelize");

const createStore = async () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const messages = db.define("message", {
    text: Sequelize.TEXT,
    author: Sequelize.STRING,
    // fromAuthorId: Sequelize.INTEGER,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  const autors = db.define("author", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  await db.sync({ force: true });

  return { db, messages, autors };
};

module.exports = createStore;
