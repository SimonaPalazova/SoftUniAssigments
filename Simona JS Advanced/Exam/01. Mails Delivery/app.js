function solve() {
    const recipient = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const list = document.getElementById('list');
    const deleted = document.querySelector('.delete-list');
    const send = document.querySelector('.sent-list')

    const addToListBtn = document.getElementById('add');
    const aresetBtn = document.getElementById('reset');

    addToListBtn.addEventListener('click', onclickaddToListBtn);
    aresetBtn.addEventListener('click', resetBtn)

    function onclickaddToListBtn(event) {
        event.preventDefault();

        if (recipient.value == '' ||  title.value == '' || message.value == ''){
            return;
        }
            const element = document.createElement('li');
            list.appendChild(element);

            element.innerHTML = `
            <h4>Title: ${title.value}</h4>
            <h4>Recipient Name: ${recipient.value}</h4>
            <span>${message.value}</span>
            <div id="list-action">
                <button type="submit" id="send">Send</button>
                <button type="submit" id="delete">Delete</button>
            </div>`;

            element.querySelector('#delete').addEventListener('click', deleteMail);
            element.querySelector('#send').addEventListener('click', sendMail)

            list.appendChild(element);

            reset();

            function sendMail(){
                const sendMailElement = document.createElement('li');
                sendMailElement.innerHTML  = `
                <span>To: ${recipient.value}</span>
                <span>Title: ${title.value}</span>
                <div class="btn">
                    <button type="submit" class="delete">Delete</button>
                </div>`;

                sendMail.querySelector('.delete').addEventListener('click', () =>{
                const deletedMail = document.createElement('li');
                deletedMail.innerHTML = `
                <span>To: ${recipient.value}</span>
                <span>Title: ${title.value}</span>`;

                deleted.appendChild(deletedMail);
                sendMailElement.remove;
                })

                send.appendChild(sendMailElement);
                element.remove
            }

            function deleteMail(){
                const deletedMail = document.createElement('li');
                deletedMail.innerHTML = `
                <span>To: ${recipient.value}</span>
                <span>Title: ${title.value}</span>`;

                deleted.appendChild(deletedMail);
                element.remove;
            }
    }

    function resetBtn(event){
        event.preventDefault()
        reset();
    }

    function reset(){
        recipient.value = '';
        title.value = '';
        message.value = '';
    }
}
solve()