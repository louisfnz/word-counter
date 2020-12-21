export interface IWordCounter {
    processChunk(chunk: string): void;
    currentCount(): Map<string, number>;
}

export type WordMap = Map<string, number>;

export class WordCounter implements IWordCounter {
    private wordMap: WordMap;

    constructor() {
        this.wordMap = new Map();
    }

    processChunk(chunk: string): boolean {
        // End of stream, return false...
        if (!chunk || !chunk.length) {
            return false;
        }

        // Get an array of words in the chunk, remove empty strings
        const words = chunk.split(/\s+/).filter((word) => word.length > 0);

        for (const word of words) {
            // Get current word count
            let count = this.wordMap.get(word);

            // If word doesn't exist, set count to 1, otherwise increment
            count = !count ? 1 : count + 1;

            // Set updated word count
            this.wordMap.set(word, count);
        }
        return true;
    }

    currentCount(): WordMap {
        return this.wordMap;
    }
}
