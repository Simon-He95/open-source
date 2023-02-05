import Theme from 'vitepress/theme'
import TeamView from './TeamView.vue'
import MyLayout from './MyLayout.vue'

import './index.css'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('TeamView', TeamView)
  },
}
