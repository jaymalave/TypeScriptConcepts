var person1 = {
    name: 'JayM',
    age: 19,
    isDeveloper: true,
    sayHi: function () { return 'Hello Jay there'; }
};
function greetPerson(person1) {
    console.log("hello" + person1.name);
    console.log(person1.sayHi());
}
greetPerson(person1);
