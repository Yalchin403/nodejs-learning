class Consultant {
    name = '';
    setName (name) {
        this.name  = name;
    }

    sayHello(){
        console.log(`Hello, ${this.name}`);
    }
}

const myConsultant = new Consultant();
const yourConsultant = new Consultant();
myConsultant.setName("mrRootLog");
console.log(myConsultant.name);
console.log(yourConsultant.name);
myConsultant.sayHello();
