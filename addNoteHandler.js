import AbstractHandler from './abstractHandler.js'
import { makeFadeOut } from './render.js';

class AddNoteHandler extends AbstractHandler {
    constructor(elem, eventType) {
        super(elem, eventType)
    }

    changeBg(event) {
        event.preventDefault();
        let el = event.target
        if (el.classList.contains('new-note__new-color')) {
            let form = document.querySelector('.new-note__form')
            form.style.backgroundColor = el.dataset.color;
            form.dataset.color = el.dataset.color;
        }
        document.querySelectorAll('.new-note__new-color').forEach(e => e.classList.remove('new-color_active'))
        el.classList.add('new-color_active')
    }

    closeAdd(event) {
        event.preventDefault();

        let form = document.querySelector('.new-note__form')
        document.querySelector('html').style = ''
        document.body.style = ''

        form.style.backgroundColor = '#fff';
        form.dataset.color = '#fff';

        document.querySelector('.new-note__form__header').innerHTML = '';
        document.querySelector('.new-note__form__text').innerHTML = '';
        document.querySelectorAll('.new-note__new-color').forEach(e => e.classList.remove('new-color_active'));
        document.querySelector('.new-note__new-color[data-color="#fff"]').classList.add('new-color_active');
    }

    saveNewNote(event, type) {
        event.preventDefault();
        let notes = JSON.parse(localStorage.getItem('notes'))

        let note = {
            heading: document.querySelector('.new-note__form__header').innerHTML,
            text: document.querySelector('.new-note__form__text').innerHTML,
            color: document.querySelector('.new-note__form').dataset.color,
        }
        
        notes[type == 'new' ? Math.max(...Object.keys(notes), -1)+1 : type] = note
        localStorage.setItem('notes', JSON.stringify(notes))
        
        this.closeAdd(event);
        this.makePopup(type == 'new' ? 'Добавлено' : 'Изменено')
        this.render()
    }

    handleEvent(event) {
        if (event.type !== 'click') {
            return
        }

        event.preventDefault();
        if (event.target.parentElement.className === 'new-note__new-color-select') {
            this.changeBg(event)
        }
        else if (event.target.classList.contains('new-note__close-btn')) {
            makeFadeOut(document.querySelector('.new-note'), 1000)
            setTimeout(this.closeAdd, 1000, event)
        }
        else if (event.target.classList.contains('new-note__save-btn')) {
            this.saveNewNote(event, event.currentTarget.dataset.type)
            document.querySelector('.new-note').hidden = true;
        }
        else if (event.target.getAttribute('contenteditable')) {
            event.target.focus()
        } 
    }
}

export default AddNoteHandler