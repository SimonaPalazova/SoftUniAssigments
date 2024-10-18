import {html, render} from './node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', onClick);

function onClick(e){
    e.preventDefault();
    let input = document.getElementById('towns');
    let data = input.value.split(', ');
    rendering(data);
    input.value = '';

}
const result = (data) => html`
<ul>
        ${data.map((city) => html `<li>${city}</li>`)}
</ul>
`;
const rendering = (data) => {
    render(result(data), document.getElementById('root'));
}
