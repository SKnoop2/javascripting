//Sam's answer:
const fruit = 'orange'
if (fruit.length > 4) {
  console.log('The fruit name has more than five characters.')
} else {
  console.log('The fruit name has five characters or less.')
};

//Official answer (# should be 5, not 4 because length starts at 1 not 0):
const fruit = 'orange'
if (fruit.length > 5) {
  console.log('The fruit name has more than five characters.')
} else {
  console.log('The fruit name has five characters or less.')
}