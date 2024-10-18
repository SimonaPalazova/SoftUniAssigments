function extractFile(string) {
    let name = string.split("\\").pop();
    let extension = name.split(".").pop();
    name = name.split(".");
    name.pop();
    name = name.join(".");

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');