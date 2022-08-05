class A  {
    constructor(name, coder) {
        this.name = name;
        this.coder = coder;
    }

    getProfile() {
        console.log(`${this.name} is a ${this.coder}`);
    }
}

class B extends A {
    constructor(name, coder, age) {
        super(name, coder);
        this.age = age;
    }

    getProfile() {
        super.getProfile();
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const b = new B('John', 'Javascript', 30);
b.getProfile();
