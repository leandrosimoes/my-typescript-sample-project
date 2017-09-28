import { Person } from './components/Person';

class App {
    person: Person;

    constructor() {
        let myAge = 32; // Your Age Here
        this.person = new Person(myAge, 'Your Name Here');
    }
}

((window: any, document: any) => {
    document.addEventListener("DOMContentLoaded", () => {
        window.app = new App();
        document.querySelector('#presentation-area').innerHTML = window.app.person.presentYourSelf();
    });
})(window, document);