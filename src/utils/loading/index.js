import Vue from 'vue'
import loading from './loading'

const loadingBox = Vue.extend(loading)
let instance = new loadingBox().$mount()
document.body.appendChild(instance.$el)

export default instance