import { Animal, Cat } from './animal.mjs';

let cat = new Animal('Cat', 4);
let kitty = new Cat('Cat', 4);

console.log(`Type of animal is a: ${cat.type}`);
console.log(`number of legs on cat: ${cat.legs}`);
console.log(cat.metaData);

cat.makeNoise();
cat.return10();
kitty.makeNoise();
