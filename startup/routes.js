
const express = require('express');

const error = require ('../middleware/error');

const users = require('../routes/users');
const courses = require('../routes/courses');
const auth =  require('../routes/auth');
const admin = require('../admin/admin');
const setting = require('../admin/settings');
const reset = require('../routes/reset');

module.exports = function (app) {

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/users', users);
app.use('/api/courses',courses);
app.use('/api/auth', auth);
app.use('/api/admin', admin);
app.use('/api/setting', setting);
app.use('/api/reset', reset);
app.use(error);


}
