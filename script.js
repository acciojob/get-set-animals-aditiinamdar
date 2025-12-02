class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

// Do not change the code below this line
// These lines make the classes globally available for the Cypress tests
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;