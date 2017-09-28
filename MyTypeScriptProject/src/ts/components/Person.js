"use strict";
var Person = (function () {
    function Person(age, name) {
        if (name === void 0) { name = 'Default Name'; }
        this._name = name;
        this._age = age;
    }
    Person.prototype.presentYourSelf = function () {
        return "Hi! Nice to meet your! My name is <b>" + this._name + "</b> and I'm <b>" + this._age + "</b> old!";
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map