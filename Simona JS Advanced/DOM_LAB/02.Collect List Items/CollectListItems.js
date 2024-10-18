function extractText() {
    const getElement = document.getElementById('items').children;
    const elements = Array.from(getElement);

    const result = elements
    .map(li => li.textContent)
    .join('\n');

    document.getElementById('result').textContent = result;
}