import * as Blockly from 'blockly'
import { calciumNumberName } from '../block/python/number'

export const categories: Blockly.utils.toolbox.ToolboxItemInfo[] = [
  {
    kind: 'category',
    name: 'Python1',
    contents: [
      {
        kind: 'block',
        type: calciumNumberName,
      },
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
        type: 'calcium_def',
      },
      {
        kind: 'block',
        type: 'calcium_def_method',
      },
    ],
  },
]
