class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name, 'Cat');
        this.color = color;
    }

    makeSound() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog('Buddy', 'Golden Retriever');
const cat = new Cat('Whiskers', 'Tabby');

dog.makeSound(); // Buddy barks.
cat.makeSound(); // Whiskers meows. 

// Static method example
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtil.add(5, 3)); // 8