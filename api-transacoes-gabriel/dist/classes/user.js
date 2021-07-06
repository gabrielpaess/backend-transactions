"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_int_1 = __importDefault(require("uuid-int"));
var id = 0;
var generator = uuid_int_1.default(id);
var uuid = generator.uuid();
var User = (function () {
    function User(name, cpf, email, age) {
        this.id = uuid;
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
        this.transactions = [];
    }
    User.prototype.adicionarTransacao = function (title, value, type) {
        this.transactions.push({
            id: Date.now(),
            title: title,
            value: value,
            type: type
        });
    };
    User.prototype.allTransactions = function () {
        return this.transactions;
    };
    User.prototype.removeTransactions = function (id) {
        var indice = this.transactions.findIndex(function (f) { return f.id === id; });
        if (indice === -1) {
        }
        this.transactions.splice(indice, 1);
    };
    return User;
}());
exports.default = User;
