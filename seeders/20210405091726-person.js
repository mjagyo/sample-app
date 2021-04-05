'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable('Person', {
          name: Sequelize.STRING,
          isBetaMember: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
          }
        })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
