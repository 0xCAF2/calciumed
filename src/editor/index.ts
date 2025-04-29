import * as Blockly from 'blockly'
// @ts-ignore
import DarkTheme from '@blockly/theme-dark'
import { createToolbox } from './create-toolbox'

export type InjectOptions = {
  renderer?: string
  sounds?: boolean
  theme?: any
  toolboxUrl: string
  zoom?: {
    startScale: number
  }
}

export const buildEditor = async ({
  parent,
  options,
  height,
}: {
  parent: HTMLElement
  options: InjectOptions
  height?: string
}): Promise<Blockly.Workspace> => {
  const toolbox = await fetchToolbox(options.toolboxUrl)

  const table = document.createElement('table')
  table.style.width = '100%'
  table.style.height = height ?? '100%'

  const tbody = document.createElement('tbody')

  const tr = document.createElement('tr')
  tr.style.height = '100%'

  const blocklyArea = document.createElement('td')
  blocklyArea.style.height = '100%'

  const blocklyDiv = document.createElement('div')
  blocklyDiv.style.position = 'absolute'

  blocklyArea.appendChild(blocklyDiv)
  tr.appendChild(blocklyArea)
  tbody.appendChild(tr)
  table.appendChild(tbody)
  parent.appendChild(table)

  const workspace = Blockly.inject(blocklyDiv, {
    renderer: options.renderer ?? 'zelos',
    sounds: options.sounds ?? false,
    theme: options.theme ?? DarkTheme,
    toolbox,
    zoom: options.zoom ?? {
      startScale: 0.7,
    },
  })
  const onresize = function () {
    let element: HTMLElement = blocklyArea
    let x = 0
    let y = 0
    do {
      x += element.offsetLeft
      y += element.offsetTop
      const parent = element.offsetParent
      if (!parent) break
      element = parent as HTMLElement
    } while (true)
    blocklyDiv.style.left = x + 'px'
    blocklyDiv.style.top = y + 'px'
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px'
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px'
    Blockly.svgResize(workspace)
  }
  window.addEventListener('resize', onresize, false)
  onresize()
  return workspace
}

async function fetchToolbox(
  url: string
): Promise<Blockly.utils.toolbox.ToolboxDefinition> {
  const response = await fetch(url)
  return createToolbox(await response.json())
}
