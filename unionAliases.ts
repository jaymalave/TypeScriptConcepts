type Combinable = number | string;
type CombineDescriptor = "as-number" | "as-text";

function addAny(
  value1: Combinable,
  value2: Combinable,
  desc: CombineDescriptor
) {
  return +value1 + +value2;
}

let answer = addAny(3, 4, "as-number");

console.log(answer);
