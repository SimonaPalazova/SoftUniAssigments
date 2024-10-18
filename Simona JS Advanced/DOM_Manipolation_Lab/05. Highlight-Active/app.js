function focused() {
    const content = Array.from(document.querySelectorAll("body div div input"));

    for (let element of content) {
        element.addEventListener("focus", () => {
            element.parentElement.classList = "focused";
        });
        element.addEventListener("blur", () => {
            element.parentElement.classList = "blurred";
        });
    }
}