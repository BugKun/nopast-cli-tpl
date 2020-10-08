import Vue from 'vue'
import message from './message'

const messageBox = Vue.extend(message)
let instance = new messageBox().$mount()
document.body.appendChild(instance.$el)

export default instance