"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
var axios_1 = require("axios");
var userService = {
    getAll: function () { return axios_1.default.get('https://jsonplaceholder.typicode.com/users'); },
    getById: function (id) { return axios_1.default.get('https://jsonplaceholder.typicode.com/users/' + id); },
};
exports.userService = userService;
