

let closeNote = document.querySelector('#close-note');
let opennote = document.querySelector('#note-book');
let note = document.querySelector('#note');
let overlay = document.querySelector('.overlay');
let paste = document.querySelector('#paste-note');
let copy = document.querySelector('#copy-note');
let deleteNote = document.querySelector('#delete-note');
let textarea = document.querySelector('#textarea');



document.addEventListener('click', function(e){
    if (e.target === overlay) {
        note.style.display = 'none';
        overlay.style.display = 'none';
    }
})
opennote.addEventListener('click',()=> {
    note.style.display = 'flex';
    overlay.style.display = 'block';
})

closeNote.addEventListener('click',(e)=> {
        note.style.display = 'none';
        overlay.style.display = 'none';
})


//Now checking the clipboard API upon a user action
copy.addEventListener('click', function(){

  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile

  navigator.clipboard.writeText(textarea.value);
});

paste.addEventListener('click', function(){
    let text = new Promise(function(resolve, reject){
        resolve(navigator.clipboard.readText())
    })
    text.then(function(result){
        textarea.innerText = result;
    })
});

deleteNote.addEventListener('click', function(e){
    textarea.value = ''
});