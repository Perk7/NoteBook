import AbstractHandler from './abstractHandler.js'

class EditNoteHandler extends AbstractHandler {
    constructor(elem, eventType) {
        super(elem, eventType)
    }

    setEditMode(note) {
        let form = document.querySelector('.new-note__form')

        form.style.backgroundColor = note.color;
        form.dataset.color = note.color;

        document.querySelector('.new-note__form__header').innerHTML = note.heading;
        document.querySelector('.new-note__form__text').innerHTML = note.text;

        document.querySelectorAll('.new-note__new-color').forEach(e => e.classList.remove('new-color_active'));
        document.querySelector(`.new-note__new-color[data-color="${note.color}"]`).classList.add('new-color_active');
    }

    handleEvent(event) {
        if (event.type !== 'click' || !document.querySelector('.header__count-delete').hidden) {
            return
        }
        event.preventDefault();
        if (event.target.className == 'note' || event.target.parentElement.className == 'note') {
            let elem = event.target.className == 'note' ? event.target : event.target.parentElement
            let note = JSON.parse(localStorage.getItem('notes'))[elem.dataset.key]

            this.openAddNoteModal(elem.dataset.key)
            this.setEditMode(note)
        }
    }
}

export default EditNoteHandler