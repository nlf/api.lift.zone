'use strict';


module.exports = {
  description: 'Get all users',
  tags: ['admin'],
  handler: async function (request, h) {

    const result = await this.db.users.summary();

    return result;
  },
  auth: {
    scope: 'admin'
  }
};
