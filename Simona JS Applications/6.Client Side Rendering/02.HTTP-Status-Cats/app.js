import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const patternCats = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click = ${onClick}>Show status code</button>
        <div class="status" style="display: none" id="100">
            h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`

const showCat = (data) => html`
<ul>
    ${data.map((cat) => patternCats(cat))}
</ul>
`

const renderingCats = (data) => {
    render(showCat(data), document.querySelector('"allCats"'))
}
renderingCats(cats)

function onClick(event){
    event.preventDefault();
    const parent = event.target.parent
    const isItOnClick = parent.querySelector('.status')
    const result = isItOnClick.style.display;

    if(result == 'none'){
        isItOnClick.textContent = 'Show status code';

    }else{
        isItOnClick.textContent = 'Hide status code';
        result = 'block'
    }
    
}