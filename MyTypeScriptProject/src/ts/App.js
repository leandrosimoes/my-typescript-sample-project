"use strict";
var Person_1 = require('./components/Person');
var App = (function () {
    function App() {
        var myAge = 32; // Your Age Here
        this.person = new Person_1.Person(myAge, 'Your Name Here');
    }
    return App;
}());
(function (window, document) {
    document.addEventListener("DOMContentLoaded", function () {
        window.app = new App();
        document.querySelector('#presentation-area').innerHTML = window.app.person.presentYourSelf();
    });
})(window, document);
//# sourceMappingURL=App.js.map