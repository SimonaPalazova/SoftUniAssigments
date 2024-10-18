function processWords(input) {
    const [wordDefinitions, testWords, command] = input.split(" | ");
    const notebook = new Map();
  
    // Process word definitions
    wordDefinitions.split("|").forEach((wordDefinitionPair) => {
      const [word, definition] = wordDefinitionPair.split(": ");
      if (!notebook.has(word)) {
        notebook.set(word, []);
      }
      notebook.get(word).push(definition);
    });
  
    // Process command
    if (command === "Test") {
      const result = [];
      testWords.split("|").forEach((word) => {
        if (notebook.has(word)) {
          result.push(`${word}:\n-${notebook.get(word).join("\n- ")}`);
        }
      });
      console.log(result.join("\n"));
    } else if (command === "Hand Over") {
      console.log(Array.from(notebook.keys()).join(" "));
    }
  }
  processWords
    (["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"])

  