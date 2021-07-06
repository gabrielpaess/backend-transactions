"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = (function () {
    function Transaction(title, value, type) {
        this.id = 0;
        this.title = title;
        this.value = value;
        this.type = type;
    }
    return Transaction;
}());
exports.default = Transaction;
