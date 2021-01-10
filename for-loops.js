//Sam's Answer
let total = 0
let limit = 10
for (let i = 0; i < limit; i++) {
  console.log(total += i)
};

//Correct answer: move console.log out of the {} brackets
let total = 0
const limit = 10
for (let i = 0; i < limit; i++) {
  total += i
}
console.log(total);
