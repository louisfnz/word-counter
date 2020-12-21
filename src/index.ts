// Just for mucking around...

import {WordCounter} from './WordCounter';

const wordCounter = new WordCounter();
const chunks = ['thi', 's', '.is', ' a! sen', 'ten', 'ce?', ''];

for (const chunk of chunks) {
    wordCounter.processChunk(chunk);
}

console.log(wordCounter.currentCount());
