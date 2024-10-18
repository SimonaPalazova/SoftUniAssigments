function processWords(input) {
    const [wordDefinitions, testWords, command] = input;
    const notebook = new Map();
  
    // Process word definitions
    wordDefinitions.split(" | ").forEach((wordDefinitionPair) => {
      const [word, definition] = wordDefinitionPair.split(": ");
      if (!notebook.has(word)) {
        notebook.set(word, []);
      }
      notebook.get(word).push(definition);
    });
  
    // Process command
    if (command === "Test") {
      const result = [];
      testWords.split(" | ").forEach((word) => {
        if (notebook.has(word)) {
          result.push(`${word}:\n-${notebook.get(word).join("\n-")}`);
        }
      });
      console.log(result.join("\n"));
    } else if (command === "Hand Over") {
      console.log(Array.from(notebook.keys()).join(" "));
    }
  }
  
  processWords([
    "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"
  ]);
  
