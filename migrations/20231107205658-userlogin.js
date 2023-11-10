'use strict';
const answer = require('../models/answer.model').answer
const question = require('../models/question.model').question
const result = require('../models/result.model').result
const test = require('../models/test.model').test
const user = require('../models/user.model').user

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("answers",answer);
    await queryInterface.createTable("questions",question);
    await queryInterface.createTable("results",result);
    await queryInterface.createTable("tests",test);
    await queryInterface.createTable("users",user);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
    await queryInterface.dropTable("answers");
    await queryInterface.dropTable("questions");
    await queryInterface.dropTable("tests");
    await queryInterface.dropTable("results");
  }
};
