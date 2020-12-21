import {WordCounter} from './WordCounter';

const wordCounter = new WordCounter();
const chunks = [
    'There is noth',
    'ing',
    ' ',
    'in the worl',
    'd so irresistibly contagious ',
    'as laughter and good humor',
    '',
];

for (const chunk of chunks) {
    wordCounter.processChunk(chunk);
}

console.log(wordCounter.currentCount());
