
let items = document.querySelector('.items');
let style =document.querySelector('style')
let script =document.querySelector('#script')

// import scripts from './app.js';
import db from "./db.json" assert {type: "json"}

// export default scriptRender(db.script)
items.innerHTML = effectRender(db);
style.innerText = styleRender(db.style)
script.innerText = scriptRender(db.script);


// function
/**
 * 
 * @param {object} data database 
 * @returns items html
 */
function effectRender(data) {
    let itemHtml = data.item.map((e)=> {
        let id = e.id
        return `
        <div class="item">
            <select name="" id="" style="position: absolute; left:0;outline:none; border:none; border-radius: 2px;">
            ${e.framework.map(e => `<option value="${e}" data-id="${e.id}">${e}</option>`).join("")}
            </select>
            <div style="position: absolute; right:0;">
                ${e.source.map(e => `<button class="copyBtn" data-id="${id}">${e}</button>`).join("")}
            </div>
            <h2>${e.title}</h2> 
            <div class="${e.classname} item-effects">
                ${e.childElement.map( e => e ).join("")}
            </div>
        </div>
        ` 
    }).join("")
    return itemHtml;
}

function styleRender(data) {
    return data.map(e => e.content).join("")
}

function scriptRender(data) {
    return data.map(e => e.content).join("")
}