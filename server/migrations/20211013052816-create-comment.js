"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
<<<<<<< HEAD:server/migrations/20211011065347-create-comment.js
      comment_user_id: {
        type: Sequelize.STRING,
=======
      user_id: {
        type: Sequelize.STRING
      },
      post_id: {
        type: Sequelize.STRING
>>>>>>> 63d92f4a1db3b57bd56d86c6f37074f03bae065e:server/migrations/20211013052816-create-comment.js
      },
      comment_content: {
        type: Sequelize.STRING,
      },
      post_id: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("comments")
  },
}
