import {addImages} from './images/header.js';

function displayNotes() {
    let main = document.querySelector('main');

    main.innerHTML = '';

    let colCount
    if (window.innerWidth < 800) {
        colCount = 1
    } else if (window.innerWidth < 1200) {
        colCount = 2
    } else if (window.innerWidth < 1700) {
        colCount = 3
    } else if (window.innerWidth < 1900) {
        colCount = 4
    } else {
        colCount = 3
    }

    for (let i=0; i<colCount; i++) {
        let column = document.createElement('ul')
        main.appendChild(column)
    }

    let notes = JSON.parse(localStorage.getItem('notes'));

    if (Object.keys(notes).length === 0) {
        let empty = document.createElement('h3')
        empty.className = 'note_empty'
        empty.innerText = 'Пусто'
        main.innerHTML = '';
        main.appendChild(empty)
    }
    
    let keys = Object.keys(notes).sort()
    for (let i=0; i < keys.length; i++) {
        let obj = notes[keys[i]]

        let note = document.createElement('div');
        note.className = 'note';
        note.dataset.color = obj.color;
        note.dataset.key = keys[i];
        note.style.backgroundColor = obj.color;

        let header = document.createElement('h3')
        header.classList.add('note__header');
        if (obj.heading == obj.text && obj.heading == '') {
            header.classList.add('note__header_empty')
        }

        header.innerHTML = obj.heading
        note.appendChild(header)

        let body = document.createElement('div')
        body.className = 'note__body';
        body.innerHTML = obj.text
        note.appendChild(body)
        
        main.childNodes[i%colCount].appendChild(note)
    }

    main.hidden = false;
    return new Promise(res => res())
}

export function disableDeleteBtn(status) {
    let deleteBtn = document.getElementById('delete-btn')
    deleteBtn.disabled = status
    deleteBtn.children[1].style.fill = status ? '#ededed' : '#fff'
    deleteBtn.children[0].style.color = status ? '#ededed' : '#fff'
    deleteBtn.querySelector('[data-svgType="lid"]').id = status ? '' : 'delete__cover';
}

function render() {
    let main = document.querySelector('main');

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
    
    makeFadeOut(main, 300).then(() => displayNotes().then(() => makeFadeIn(main, 200)))
}

export function makeFadeOut(elem, time) {
    elem.classList.add('fade-out')
    elem.style.animation = `fade-out ${time/1000}s`;
    return new Promise((res, rej) => {
        setTimeout(() => {
            elem.hidden = true;
            elem.classList.remove('fade-out')
            elem.style.animation = '';
            res()
        }, time)
    })
}

export function makeFadeIn(elem, time) {
    elem.classList.add('fade-in')
    elem.style.animation = `fade-in ${time/1000}s`;
    return new Promise((res, rej) => {
        setTimeout(() => {
            elem.hidden = false;
            elem.classList.remove('fade-in')
            elem.style.animation = '';
            res()
        }, time)
    })
}

export default render