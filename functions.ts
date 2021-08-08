function add(n1: number, n2: number) {
  return n1 + n2;
}

//this way typescript cannot figure out the difference in
//parameters

//let addPointer: Function;

//we also have to define the return type of the function we
//are passing

let addPointer: (a: number, b: number) => number;

addPointer = add;

console.log(addPointer(4, 6));

//callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 85, (result) => {
     console.log(result + 'hello')
})
