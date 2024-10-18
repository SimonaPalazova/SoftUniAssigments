function validate() {
    const input = document.querySelector("input");
    const filter = /[a-z]+\@[a-z]+\.[a-z]+/g;

    input.addEventListener("change", () => {
        const inputText = input.value;
        if (filter.test(inputText)) {
            input.classList.remove("error");
        } else {
            input.classList = "error";
        }
    });
}