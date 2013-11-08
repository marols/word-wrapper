## Word Wrapper TDD kata

### What is this thing?
This project has solved the Word Wrapper TDD kata originally put forward by Robert C. Martin in [this blogpost](http://thecleancoder.blogspot.se/2010/10/craftsman-62-dark-path.html "The Clean Coder blog"). I have solved it using JavaScript, Karma, Mocha, and Chai.

### Kata requirements

#### In words:
Break strings at specified length or at the closest space before the specified length.

#### In test cases:

Function call	 | Returns
--- | --- | ---
wrap(null, 10) | ""
wrap("", 10) | ""
wrap("word", 5) | "word"
wrap("word word",6) | "word\nword"
wrap("word word word", 9) | "word word\nword"
wrap("longword",4) | "long\nword"
wrap("longerword",6) | "longer\nword"
wrap("word word word", 6) | "word\nword\nword"
wrap("word word word", 11) | "word word word\n"
