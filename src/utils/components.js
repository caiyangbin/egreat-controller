import Controller from '../components/Controller'
import File from '../components/File'
import Music from '../components/Music'
import My from '../components/My'
import Video from '../components/Video'
import ControlButton from '../components/ControlButton'

export default (Vue) => {
  Vue.component('Controller', Controller)
  Vue.component('File', File)
  Vue.component('Music', Music)
  Vue.component('My', My)
  Vue.component('Video', Video)
  Vue.component('ControlButton', ControlButton)
}
