export class Person {
    private _name: string;
    private _age: number;

    constructor(age: number, name: string = 'Default Name') {
        this._name = name
        this._age = age;
    }

    presentYourSelf(): string {
        return `Hi! Nice to meet your! My name is <b>${this._name}</b> and I'm <b>${this._age}</b> old!`;
    }
}