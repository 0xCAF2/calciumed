import * as Blockly from 'blockly'

export const categories: Blockly.utils.toolbox.ToolboxItemInfo[] = [
  {
    kind: 'category',
    name: '条件',
    contents: [
      {
        kind: 'block',
        type: 'controls_if',
      },
      {
        kind: 'block',
        type: 'pseudo_if',
      },
    ],
  },
]
