//objects
const person: {
  //this types assignments are not recommended
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple 
} = {
  //properties of an object
  name: "Jay",
  age: 18,
  hobbies: ["cricket", "biking", "travelling"],
  role: [2, "programmer"],
};

//another way
let favActivities: string[];

favActivities = ["cricket", "biking", "travelling"];

console.log(person.name);
