// object destructuring syntax for function arguments 

const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];

function destructuringGroupBy(params) {
  let result = {};
  for (res of params) {
    (result[res.type] = result[res.type] || []).push(res)
  }
  return result
}

console.log(destructuringGroupBy(inventory))


// output

/*{
  vegetables: [{ name: 'asparagus', type: 'vegetables' }],
  fruit: [
    { name: 'bananas', type: 'fruit' },
    { name: 'cherries', type: 'fruit' }
  ],
  meat: [
    { name: 'goat', type: 'meat' },
    { name: 'fish', type: 'meat' }
  ]
}*/