'use strict';

const Controllers = require('./controllers');

module.exports = [
  /* /user */
  { method: 'GET', path: '/user', config: Controllers.users.self },
  { method: 'PATCH', path: '/user', config: Controllers.users.update },
  { method: 'POST', path: '/user/login', config: Controllers.users.login },
  { method: 'POST', path: '/user/logout', config: Controllers.users.logout },
  { method: 'POST', path: '/user/recover', config: Controllers.users.recover },
  { method: 'POST', path: '/user/signup', config: Controllers.users.signup },
  { method: 'POST', path: '/user/validate', config: Controllers.users.validate },
  { method: 'POST', path: '/user/reset', config: Controllers.users.reset },
  { method: 'POST', path: '/user/confirm', config: Controllers.users.confirm },
  { method: 'GET', path: '/user/invites', config: Controllers.users.invites },

  /* /invites */
  { method: 'GET', path: '/invites/{token}', config: Controllers.invites.validate },

  /* /activities */
  { method: 'GET', path: '/suggest/activities/{name}', config: Controllers.activities.suggest },
  { method: 'GET', path: '/activities', config: Controllers.activities.list },
  { method: 'GET', path: '/activities/{id}', config: Controllers.activities.get },
  { method: 'POST', path: '/activities', config: Controllers.activities.create },
  { method: 'PUT', path: '/activities/{id}/promote', config: Controllers.activities.promote },

  /* /workouts */
  { method: 'GET', path: '/workouts', config: Controllers.workouts.all },
  { method: 'POST', path: '/workouts', config: Controllers.workouts.create },
  { method: 'GET', path: '/workouts/{id}', config: Controllers.workouts.get },
  { method: 'PUT', path: '/workouts/{id}', config: Controllers.workouts.update },
  { method: 'GET', path: '/public/workouts/{id}', config: Controllers.workouts.public },

  /* /admin */
  { method: 'GET', path: '/admin/users', config: Controllers.admin.users.list }
];