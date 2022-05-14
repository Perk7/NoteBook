import render from './render.js'

export default class Handler {
    constructor(elem, eventType) {
        this.elem = elem
        for (let i of eventType) {
            this.elem.addEventListener(i, this)
        }
    }

    handleEvent(event) {
        // abstract function
    }

    render() {
        render()
    }

    openAddNoteModal(type) {
        let newNoteModal = document.querySelector('.new-note');
        newNoteModal.hidden = false;
        document.querySelector('.new-note__form').dataset.type = type;
        document.querySelector('html').style = 'overflow: hidden !important; overflow-y: scroll !important; height: 100% !important;'
        document.body.style = 'overflow: hidden !important; height: 100% !important;'
    }

    makePopup(text) {
        let shadow = document.createElement('div')
        shadow.className = 'new-note popup__shadow'

        let popupText = document.createElement('div')
        popupText.innerHTML = text
        popupText.className = 'popup__text';

        shadow.appendChild(popupText)

        document.body.appendChild(shadow)
        setTimeout(() => document.body.removeChild(shadow), 2000)
    }

}