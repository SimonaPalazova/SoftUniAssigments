window.addEventListener('load', solve);

function solve() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const people = document.getElementById('people-count');
    const date = document.getElementById('from-date');
    const days = document.getElementById('days-count');

    const nextStepBtn = document.getElementById('next-btn');
    nextStepBtn.addEventListener('click', next)

    const ticketPreview = document.getElementsByClassName('ticket-info-list')[0];
    const confirmTicket = document.getElementsByClassName('confirm-ticket')[0];

    function next(e){
        e.preventDefault();
        
        if (!firstName.value || !lastName.value || !people.value || !date.value || !days.value) {
            return
        }
        
        const fName = firstName.value;
        const lName = lastName.value;
        const peopleInput = people.value;
        const dateInput = date.value;
        const daysInput = days.value;
       
        const li = document.createElement('li');
        li.setAttribute('class', 'ticklet');
        

        li.innerHTML = `
        <article> 
        <h3>Name: ${fName} ${lName}</h3>

        <p>From date: ${dateInput}</p>
        
        <p>For ${daysInput} days</p>
        
        <p>For ${peopleInput} people</p> 
        </article>
        
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>>`;
        ticketPreview.appendChild(li)

        const editButton = li.querySelector('.edit-btn')
        editButton.addEventListener('click', edit);
        const contBtn = li.querySelector('.continue-btn')
        contBtn.addEventListener('click', continuee);

        debugger
        firstName.value = '';
        lastName.value = '';
        people.value = '';
        date.value = '';
        days.value = '';


        function edit(){
        firstName.value = fName;
        lastName.value = lName;
        people.value = peopleInput;
        date.value = dateInput;
        days.value = daysInput;
        nextStepBtn.addEventListener('click', next)
        li.remove();
        }
        function continuee(){
            confirmTicket.appendChild(li);
            li.remove();
        }

        removeEventListener(nextStepBtn)
    }
}


    
    
