import AbstractHandler from './abstractHandler.js'
import {disableDeleteBtn} from './render.js'

class HeaderHandler extends AbstractHandler {
    constructor(elem, eventType) {
        super(elem, eventType)
    }

    updateDeleteHeader() {
        let curArr = JSON.parse(localStorage.getItem('delete-counter')).length
        let notes = Object.keys(JSON.parse(localStorage.getItem('notes'))).length

        if (curArr) {
            disableDeleteBtn(false)
        } else {
            disableDeleteBtn(true)
        }
        
        let deleteHeader = document.querySelector('.header__count-delete')
        deleteHeader.hidden = false;
        deleteHeader.innerHTML = `Выбрано ${curArr} из ${notes}`
    }

    setDefaultMode() {
        document.querySelector('.header__logo').hidden = false;
        document.querySelector('.header__count-delete').hidden = true;

        let addBtn = document.getElementById('add-btn')
        addBtn.dataset.action = 'add'
        addBtn.children[0].innerHTML = 'Добавить'
        addBtn.children[1].style.transform = ''

        document.getElementById('delete-btn')
            .dataset.action = 'delete'    
    }

    setDeleteMode() {
        let notes = document.querySelectorAll('.note')
        
        for (let i of notes) {
            i.style.backgroundColor = '#7a7a7a'

            i.addEventListener('click', event => {
                let curArr = JSON.parse(localStorage.getItem('delete-counter'));
                
                let elem = event.currentTarget
                let key = elem.dataset.key

                if (curArr.includes(key)) {
                    elem.style.backgroundColor = '#7a7a7a';
                    curArr.splice(curArr.indexOf(key), 1)
                } else {
                    elem.style.backgroundColor = elem.dataset.color;        
                    curArr.push(key)
                }
                localStorage.setItem('delete-counter', JSON.stringify(curArr))

                this.updateDeleteHeader()
            })
        }    
    }

    handleEvent(event) {
        if (event.type !== 'click') {
            return
        }

        event.preventDefault();
        switch (event.currentTarget.dataset.action) {
            case 'add':
                this.openAddNoteModal('new')
                break;
            case 'refuse':
                this.setDefaultMode()
                this.render()
                break;
            case 'delete':
                localStorage.setItem('delete-counter', JSON.stringify([]))
                disableDeleteBtn(true)

                document.querySelector('.header__logo').hidden = true;

                this.updateDeleteHeader()
                this.setDeleteMode()
                
                let refuseBtn = document.getElementById('add-btn')
                refuseBtn.dataset.action = 'refuse'
                refuseBtn.children[0].innerHTML = 'Отменить'
                refuseBtn.children[1].style.transform = 'rotate(45deg)'

                document.getElementById('delete-btn')
                    .dataset.action = 'confirm-delete'
                break;
            case 'confirm-delete':
                let selectedNotes = JSON.parse(localStorage.getItem('delete-counter')).sort()
                let notes = JSON.parse(localStorage.getItem('notes'))

                for (let i of selectedNotes) {
                    delete notes[i]
                }

                localStorage.setItem('notes', JSON.stringify(notes))

                this.setDefaultMode()
                this.makePopup('Удалено')
                this.render()
                break;
        }
    }
}

export default HeaderHandler