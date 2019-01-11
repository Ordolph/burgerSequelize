const orm = require('../config/orm.js');

var burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    create: function (val, cb) {
        orm.insertOne(val, function (res) {
            cb(res);
        });
    },

    update: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res);
        });
    },

    delete: function(id, cb) {
        orm.deleteOne(id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;