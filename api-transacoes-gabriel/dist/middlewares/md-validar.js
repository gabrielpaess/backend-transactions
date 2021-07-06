"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarTransactions = exports.validarUser = exports.validarAge = exports.validarEmail = exports.validarCpf = exports.validarNome = void 0;
var data_1 = require("../data");
function validarNome(request, response, next) {
    var name = request.body.name;
    if (!name) {
        return response.status(400).json({
            msg: "O nome deve ser informado",
        });
    }
    if (name.length < 3) {
        return response.status(400).json({
            msg: "O nome deve conter no minimo 3 caracteres",
        });
    }
    next();
}
exports.validarNome = validarNome;
function validarCpf(request, response, next) {
    var cpf = request.body.cpf;
    var existe = data_1.usersArray.find(function (f) {
        return f.cpf === cpf;
    });
    if (existe) {
        return response.status(400).json({ msg: "CPF já Cadastrado" });
    }
    next();
}
exports.validarCpf = validarCpf;
function validarEmail(request, response, next) {
    var email = request.body.email;
    if (!email) {
        return response.status(400).json({
            msg: "O email deve ser informado",
        });
    }
    var arroba = new RegExp("@");
    if (!arroba.test(email)) {
        return response.status(400).json({
            msg: "Digite um email valido",
        });
    }
    next();
}
exports.validarEmail = validarEmail;
function validarAge(request, response, next) {
    var age = request.body.age;
    if (!age) {
        return response.status(400).json({
            msg: "O idade dever informado corretamente",
        });
    }
    next();
}
exports.validarAge = validarAge;
function validarUser(request, response, next) {
    var userId = request.params.userId;
    var userIdInt = parseInt(userId);
    var indiceUser = data_1.usersArray.findIndex(function (f) {
        return f.id === userIdInt;
    });
    if (indiceUser === -1) {
        return response.status(404).json({
            msg: "User not found",
        });
    }
    next();
}
exports.validarUser = validarUser;
function validarTransactions(request, response, next) {
    var _a = request.params, userId = _a.userId, id = _a.id;
    var userIdInt = parseInt(userId);
    var idInt = parseInt(id);
    var indiceUser = data_1.usersArray.findIndex(function (f) {
        return f.id === userIdInt;
    });
    var transactions = data_1.usersArray[indiceUser].transactions.find(function (f) { return f.id === idInt; });
    if (!transactions) {
        return response.status(404).json({
            msg: "Transactions not found",
        });
    }
    next();
}
exports.validarTransactions = validarTransactions;
