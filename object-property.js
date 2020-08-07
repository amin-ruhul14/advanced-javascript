const student = [
    { id: 14, name: 'Amin Ruhul' },
    { id: 06, name: 'Hridoy' },
    { id: 05, name: 'Pabel' },
    { id: 44, name: 'Yeasfi' },
    { id: 50, name: 'Rabbi' }
];

const name = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.find(s => s.id > 40);
console.log(biggerOne);