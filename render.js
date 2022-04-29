import {addImages} from './images/header.js';

function displayNotes() {
    let main = document.querySelector('main');
    main.innerHTML = '';
    let notes = JSON.parse(localStorage.getItem('notes'));

    if (Object.keys(notes).length === 0) {
        let empty = document.createElement('h3')
        empty.className = 'note_empty'
        empty.innerText = 'Пусто'
        main.appendChild(empty)
    }
    
    for (let i of Object.keys(notes).sort()) {
        let obj = notes[i]

        let note = document.createElement('div');
        note.className = 'note';
        note.dataset.color = obj.color;
        note.dataset.key = i;
        note.style.backgroundColor = obj.color;

        let header = document.createElement('h3')
        header.className = 'note__header';
        header.appendChild(document.createTextNode(obj.heading))
        note.appendChild(header)

        let body = document.createElement('div')
        body.className = 'note__body';
        body.appendChild(document.createTextNode(obj.text))
        note.appendChild(body)

        main.appendChild(note)
    }
}

export function disableDeleteBtn(status) {
    let deleteBtn = document.getElementById('delete-btn')
    deleteBtn.disabled = status
    deleteBtn.children[1].style.fill = status ? '#ededed' : '#FFF'
    deleteBtn.children[0].style.color = status ? '#ededed' : '#FFF'
    deleteBtn.querySelector('[data-svgType="lid"]').id = status ? '' : 'delete__cover';
}

function render() {
    if (!(document.querySelector('.btn-block__add-btn').children.length !== 1)) {
        addImages()
    }

    if (!localStorage.getItem('notes')) {
        localStorage.setItem('notes', JSON.stringify({}))
        disableDeleteBtn(true)
    } else if (!Object.keys(JSON.parse(localStorage.getItem('notes'))).length) {
        disableDeleteBtn(true)
    } else {
        disableDeleteBtn(false)
    }

    for (let i of document.querySelectorAll('.new-note__new-color')) {
        i.style.backgroundColor = i.dataset.color;
    }

    displayNotes()
}

export default render
