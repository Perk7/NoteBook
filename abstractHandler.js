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

    

}