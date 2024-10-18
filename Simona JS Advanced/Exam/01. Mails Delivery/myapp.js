const h4Title = document.createElement('h4');
h4Title.value = title.placeholder + ":" + " " + title.value
li.appendChild(h4Title);

const h4Recipient = document.createElement('h4');
h4Recipient.value = recipient.placeholder + ":" + " " + recipient.value
li.appendChild(h4Recipient);

const span = document.createElement('span');
span.value = message.value;
li.appendChild(span);

const div = document.createElement('div');
div.className = "list-mail";
li.appendChild(div);

const sentBtn = document.createElement('button');
sentBtn.textContent = 'Send';
sentBtn.id ="list-action";
div.appendChild(sentBtn);

const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.id ="list-action";
div.appendChild(deleteBtn);