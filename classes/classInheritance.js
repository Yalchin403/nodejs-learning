#!/usr/bin/node


class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run (value) {
        this.speed = value;
        console.log(`${this.name} runs with ${this.speed} km/h speed`);
    }

    stop () {
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }

}


class Rabbit extends Animal {
    hide () {
        console.log(`${this.name}'s got hidden now`)
    }

    // or owerride one of existing methods

    stop () {
        super.stop();
        console.log("The super method is called and overwritten successfullyy ");
    }
}

let rabbit_instance = new Rabbit("sweetRabbit");
rabbit_instance.run(20);
rabbit_instance.stop();
rabbit_instance.hide();


//  overriding constructor


class Human {
    constructor(age) {
        this.age = age;
    }

}

class Yalchin403 extends Human {
    constructor(age, name) {
        super(age);  // super should be called before adding new instance variables
        this.name = name;
    }
    sayMyName () {
        console.log(`Your name is ${this.name}`)
    }
}


let yalchin_instance = new Yalchin403(21, "Yalchin Mammadli")
yalchin_instance.sayMyName()

// overriding class fields

class Animal {
    name = 'animal';

    constructor() {
        console.log(this.name); // (*)
    }
}

class Rabbit extends Animal {
    name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal

//  class methods are different...

class Animal {
    showName() {  // instead of this.name = 'animal'
        console.log('animal');
    }

    constructor() {
        this.showName(); // instead of alert(this.name);
    }
}

class Rabbit extends Animal {
    showName() {
        console.log('rabbit');
    }
}

new Animal(); // animal
new Rabbit(); // rabbit