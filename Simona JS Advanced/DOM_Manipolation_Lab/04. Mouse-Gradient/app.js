function attachGradientEvents() {
    const gradientBox = document.getElementById("gradient");
    gradientBox.addEventListener("mousemove", onClick);

    function onClick(event) {
        const x = event.offsetX;
        const perc = Math.floor((x / 300) * 100);
        document.getElementById("result").textContent = perc + "%";
    }
}