function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((e) =>
        e.addEventListener('click', onclick)
    );

    function onclick(event){
        const parent = event.target.parentElement;
        const unlockedChek = parent.querySelector('input[value = "unlock"]');

        if(unlockedChek.checked){
           const hiddentDiv = parent.querySelector('div');
           hiddentDiv.style.display === "block"
           ?(hiddentDiv.style.display = "none")
           :(hiddentDiv.style.display = "block");

           event.target.textContent === 'Show more'
           ? (event.target.textContent = 'Hide it')
           : (event.target.textContent = 'Show more');
        }
    }

}