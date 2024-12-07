import * as Blockly from 'blockly'

export const categories: Blockly.utils.toolbox.ToolboxItemInfo[] = [
  {
    kind: 'category',
    name: 'Python1',
    contents: [
      {
        kind: 'block',
        type: 'calcium_list',
      },
    ],
  },
  {
    kind: 'category',
    name: 'Python2',
    contents: [
      {
        kind: 'block',
        type: 'controls_for',
      },
      {
        kind: 'block',
        type: 'calcium_def',
      },
      {
        kind: 'block',
        type: 'calcium_def_method',
      },
    ],
  },
]
