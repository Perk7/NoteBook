import AbstractHandler from './abstractHandler.js'

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

        form.style.backgroundColor = '#FFF';
        form.dataset.color = '#FFF';

        document.querySelector('.new-note').hidden = true;

        document.querySelector('.new-note__form__header').innerHTML = '';
        document.querySelector('.new-note__form__text').innerHTML = '';
        document.querySelectorAll('.new-note__new-color').forEach(e => e.classList.remove('new-color_active'));
        document.querySelector('.new-note__new-color[data-color="#fff"]').classList.add('new-color_active');
    }

    saveNewNote(event) {
        event.preventDefault();
        let notes = JSON.parse(localStorage.getItem('notes'))

        let note = {
            heading: document.querySelector('.new-note__form__header').innerHTML,
            text: document.querySelector('.new-note__form__text').innerHTML,
            color: document.querySelector('.new-note__form').dataset.color,
        }
        
        notes[Math.max(...Object.keys(notes), -1)+1] = note
        localStorage.setItem('notes', JSON.stringify(notes))
        
        this.closeAdd(event);
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
            this.closeAdd(event)
        }
        else if (event.target.classList.contains('new-note__save-btn')) {
            this.saveNewNote(event)
        }
        else if (event.target.getAttribute('contenteditable')) {
            event.target.focus()
        } 
    }
}

export default AddNoteHandler