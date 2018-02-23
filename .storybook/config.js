import { setAddon, configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'

function loadStories () {
  require('../stories')
}

setAddon(JSXAddon)

setOptions({
  name: 'react-clap-button',
  url: 'https://github.com/Kikobeats/react-clap-button',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: false
})

configure(loadStories, module)
