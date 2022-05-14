import render from './render.js';
import HeaderHandler from './headerHandler.js'
import AddNoteHandler from './addNoteHandler.js';
import EditNoteHandler from './editNoteHandler.js';

let addBtn = new HeaderHandler(document.querySelector('#add-btn'), ['click'])
let deleteBtn = new HeaderHandler(document.querySelector('#delete-btn'), ['click'])

let addNoteForm = new AddNoteHandler(document.querySelector('.new-note__form'), ['click'])
let notes = new EditNoteHandler(document.querySelector('main'), ['click'])

render()