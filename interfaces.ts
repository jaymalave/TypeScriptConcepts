interface Person{
    name: String,
    age: number,
    isDeveloper: boolean
    sayHi: ()=>string;
}

var person1: Person = {
    name: 'JayM',
    age: 19,
    isDeveloper: true,
    sayHi: ()=> {return 'Hello Jay there'}
}

function greetPerson(person1: Person): void{
    console.log("hello" + person1.name)
    console.log(person1.sayHi())
}

greetPerson(person1);



