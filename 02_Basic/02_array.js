const arr = ["rahul" ,"pawan", "deepak"];
const arr1 = ["piyush", "vicky", "vimal"];
// console.log(arr);
// console.log(arr1);


// arr.push(arr1)
// console.log(arr +" "+ arr1);
// console.log(arr);

// const newarr = arr.concat(arr1);
// console.log(newarr);

const new_arr = [...arr, ...arr1]
console.log(new_arr);

const another_array = [1,2,3,[3,2,8],4,5,6,[4,5,[2,3]],7,[8,9]]
const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array.sort());

// Array.isArray
// Array.from
// Array.of