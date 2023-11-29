import fruits from "./foods";
import { Choice, Remove } from "./helpers";

const fruit = Choice(fruits);
console.log(`I’d like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);
const left = Remove(fruits, fruit);
console.log(`I’m sorry, we’re all out. We have ${left} left.`);
