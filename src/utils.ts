export const toAscii = (chunk: string): string =>
    chunk
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');

export const fromAscii = (chunk: string): string =>
    String.fromCharCode(...chunk.split(' ').map((char) => Number(char)));
