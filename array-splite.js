const num = [1, 2, 3, 4, 5, 6, 7, 8];
const part = num.slice(2, 5);

const remove = num.splice(2, 3, 77);
console.log(remove);
console.log(num);

const together = num.join(", ");
console.log(together);