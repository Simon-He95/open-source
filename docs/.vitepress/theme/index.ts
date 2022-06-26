import Theme from 'vitepress/theme'
import TeamView from './TeamView.vue'
import './index.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('TeamView',TeamView)
  }
}

