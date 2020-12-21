# Word Counter

## Notes:

- Assumes chunks have already been decoded and all characters are valid
- Words are not sanitised and will include adjacent punctuation
- Words are case sensitive, e.g. Test and test will count as two separate words
- `processChunk()` returns false on an empty chunk signifying the end of the stream,
 but assumes this will be handled outside the class
