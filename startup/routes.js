
const express = require('express');

const error = require ('../middleware/error');

const users = require('../routes/users');
const auth =  require('../routes/auth');
const admin = require('../admin/admin');
const reset = require('../routes/reset');

module.exports = function (app) {

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/admin', admin);
app.use('/api/reset', reset);
app.use(error);


}